<template>
  <!-- <Tutorial/> -->
  <div>
    <NuxtLink to="/testSurvey"> Test Survey Page </NuxtLink>
    <NuxtLink to="/testAnnotation"> Test Annotation Page </NuxtLink>
    <NuxtLink to="/testDropzonePage"> Test Dropzone Page </NuxtLink>
  </div>
</template>

<script>
// import LogRocket from "logrocket";
// LogRocket.init("vxnps8/test");

// import 'asdaas' from asdas;

export default {
  name: "IndexPage",
  // head: {
  //   link: [
  //     {
  //       rel: "stylesheet",
  //       href: "https://cdn.jsdelivr.net/npm/@recogito/annotorious@2.7.8/dist/annotorious.min.css",
  //     },
  //   ],
  //   script: [
  //     {
  //       src: "https://cdn.jsdelivr.net/npm/@recogito/annotorious@2.7.8/dist/annotorious.min.js",
  //       type: "module",
  //     },
  //   ],
  // },
  data() {
    return {
      socket: undefined,
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "home", // Use socket "home"

      // socket.io-client opts:
      reconnection: false,
    });

    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });

    try {
      rtes.map((item) => item);
    } catch (err) {
      console.log("estoy por aca");
      this.$logRocket.captureException(err, {
        tags: {
          // additional data to be grouped as "tags"
          subscription: "Pro",
        },
        extra: {
          // additional arbitrary data associated with the event
          pageName: "ProfileView",
        },
      });
    }
  },
};
</script>
