<template>
  <div>
    <testDropzone
      ref="baseFileUploader"
      @accepted="handleAccepted"
      path="test-nuxt/"
    />
    <button @click="processStuff">Upload</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleAccepted(e) {
      console.log(e);
    },
    processStuff() {
      this.$refs.baseFileUploader.processQueue();
    },
  },
};
</script>

<style></style>
