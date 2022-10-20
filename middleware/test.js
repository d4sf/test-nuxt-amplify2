export default async function ({ $axios, redirect }) {
  try {
    const response = await $axios.$get(
      "https://gwy-dev.thefutures.io/gateway/tickets"
    );
  } catch (error) {
    console.error("error", error);
    redirect(401, "/");
    console.log("redirected by middleware");
  }
}
