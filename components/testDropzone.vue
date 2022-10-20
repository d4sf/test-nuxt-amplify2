<template>
  <form class="BaseFileUploader dropzone">
    <div id="dropzone-message" class="dz-message BaseFileUploader__message">
      <p>
        <i class="fas fa-inbox BaseFileUploader__upload-icon mb-1"></i>
        <br />
        <span class="font-weight-bold text-decoration-underline upload-trigger">
          <u>choose</u>
        </span>
        drag
      </p>
    </div>
  </form>
</template>

<script>
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
Dropzone.autoDiscover = false;

export default {
  name: "BaseFileUploader",
  components: {},
  props: {
    path: {
      type: String,
    },
    awsLambda: {
      type: String,
      default: null,
    },
    awsKey: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    dropzone: null,
    options: {
      url: "/",
      method: "put",
      autoProcessQueue: false,
      addRemoveLinks: true,
      maxFilesize: 10240,
      timeout: 200000000,
      parallelUploads: 1,
      uploadMultiple: false,
      header: "",
    },
  }),
  methods: {
    async accept(file, done) {
      this.$emit("accepted", file.name);
      done();
    },
    async signUrlAndUpload() {
      const acceptedFiles = this.dropzone.getAcceptedFiles();
      const file = acceptedFiles[0];
      const file_url = await this.getSignedURL(file);

      setTimeout(async () => {
        if (file_url) {
          file.url = file_url;
          this.dropzone.processQueue();
        } else {
          this.$emit("error");
        }
      }, 300);
    },
    async processQueue() {
      const acceptedFilesLenght = this.dropzone.getAcceptedFiles().length;

      if (acceptedFilesLenght) {
        await this.signUrlAndUpload();
      } else {
        this.$emit("completed");
      }
    },
    removeFiles() {
      this.dropzone.removeAllFiles();
    },
    removeFile(file) {
      this.dropzone.removeFile(file);
    },
    checkUpload(response) {
      if (response.status == "error") {
        this.$emit("error");
      }
    },
    uploadprogress(file, progress, bytesSent) {
      this.$emit("updatePercent", progress);
    },
    async getSignedURL(file) {
      try {
        const URL =
          "https://kaygc4x6za.execute-api.us-east-1.amazonaws.com/Dev/TheFutures-FileUpload-Dev";
        const filePath = this.path + file.name;

        file.path = filePath;
        file.filename = file.name;

        const payload = {
          filePath,
          contentType: file.type,
        };

        const instance = this.$axios.create();

        const config = {
          "x-api-key": "WnGcnEnLbg8LpKP6GJknf8SWARN3Yz9K1cD9Ikzw",
        };

        delete instance.defaults.headers.common["X-Socket-Id"];
        delete instance.defaults.headers.common["X-Requested-With"];

        const response = await instance.post(URL, payload, { headers: config });

        const data = response.data;

        file.path = this.path + data.filename;
        file.filename = data.filename;

        if (data.url) {
          return data.url;
        }
        throw new Error("Invalid request to lambda");
      } catch (error) {
        console.error(error);
        this.$emit("error");
        return false;
      }
    },
    errorOnUploadToS3(file) {
      this.removeFile(file);
    },
  },
  mounted() {
    this.$nextTick(() => {
      const vm = this;
      this.options.accept = this.accept;
      this.options.sending = (file, xhr) => {
        const { send } = xhr;
        xhr.send = () => {
          send.call(xhr, file);
        };
      };
      this.options.error = this.errorOnUploadToS3;
      this.options.complete = this.checkUpload;
      this.options.uploadprogress = this.uploadprogress;

      this.dropzone = new Dropzone(this.$el, this.options);

      this.dropzone.on("processing", (file) => {
        console.log(file.url);
        console.log("on processing", file);
        this.$emit("processing", file);
        this.dropzone.options.url = file.url;
      });

      this.dropzone.on("removedfile", (file) => {
        this.$emit("removed", file.name);
      });

      this.dropzone.on(
        "totaluploadprogress",
        (uploadProgress, totalBytes, totalBytesSent) => {
          this.$emit("uploading", {
            uploadProgress,
            totalBytes,
            totalBytesSent,
          });
        }
      );

      this.dropzone.on("success", (file) => {
        this.dropzone.removeFile(file);
        this.$emit("success", file);

        const acceptedFilesLenght = this.dropzone.getAcceptedFiles().length;

        if (acceptedFilesLenght) {
          vm.signUrlAndUpload();
        } else {
          this.$emit("completed");
        }
      });
    });
  },
  beforeUnmount() {
    this.dropzone.disable();
  },
};
</script>

<style></style>
