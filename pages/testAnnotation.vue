<template>
  <div>
    <img id="plan" src="map.jpg" style="width: 100%; max-width: 1024px" />
  </div>
</template>

<script>
// import OpenSeadragon from "openseadragon";
// import * as Annotorious from "@recogito/annotorious-openseadragon";
// const Annotorious2 = Annotorious.default;

// import "@recogito/annotorious-openseadragon/dist/annotorious.min.css";
// import "@recogito/annotorious-openseadragon/dist/annotorious.min.css";

import { Annotorious } from "@recogito/annotorious";
import "@recogito/annotorious/dist/annotorious.min.css";

export default {
  name: "TestAnnotations",
  head: {
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href: "https://cdn.jsdelivr.net/npm/@recogito/annotorious@2.7.8/dist/annotorious.min.css",
    //   },
    // ],
    // script: [
    //   {
    //     src: "https://cdn.jsdelivr.net/npm/@recogito/annotorious@2.7.8/dist/annotorious.min.js",
    //     type: "module",
    //   },
    // ],
  },

  data() {
    return {
      anno: null,
    };
  },

  methods: {
    initAnno() {
      // const Annotorious2 = Annotorious.default;

      this.anno = new Annotorious({
        image: document.getElementById("plan"),
      });

      this.anno.on("createAnnotation", function (annotation) {
        console.log("Created annotation", annotation);
      });

      this.anno.on("createSelection", function (selection) {
        console.log("Created selection", selection);
      });

      this.anno.on("deleteAnnotation", function (annotation) {
        console.log("Delete annotation", selection);
      });

      this.anno.on("mouseEnterAnnotation", function (annotation, element) {
        console.log("Mouse ENTERED annotation", annotation);
      });

      this.anno.on("selectAnnotation", function (annotation, element) {
        console.log("Select annotation", annotation);
      });

      this.anno.on("cancelSelected", function (selection) {
        console.log("UNSELECTED");
      });

      this.anno.on("clickAnnotation", function (annotation, element) {
        console.log("Clicked annotation", annotation);
      });
    },
  },

  mounted() {
    this.initAnno();
    // console.log(Annotorious.default);
  },
};
</script>

<style></style>
