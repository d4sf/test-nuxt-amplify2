<template>
  <!-- <Tutorial/> -->
  <div>
    <NuxtLink to="/testSurvey"> Test Survey Page </NuxtLink>
    <NuxtLink to="/testAnnotation"> Test Annotation Page </NuxtLink>
    <NuxtLink to="/testDropzonePage"> Test Dropzone Page </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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

    console.log(a);
  },
};
</script>
