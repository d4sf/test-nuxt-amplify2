export default async function ({ $axios, redirect }) {
  console.log("passin tru middleware");
  // if (!localStorage.getItem("myCat")) {
  //   redirect(401, "/");
  // }
  // localStorage.getItem("myCat");
  // try {
  //   const response = await $axios.$get(
  //     "https://gwy-dev.thefutures.io/gateway/tickets"
  //   );
  // } catch (error) {
  //   console.error("error", error);
  //   redirect(401, "/");
  //   console.log("redirected by middleware");
  // }
}
