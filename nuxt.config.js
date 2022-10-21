export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "test-nuxt-amplify2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global middlewares
  router: {
    // middleware: ["test"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Docs: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Docs: https://nuxt-socket-io.netlify.app/installation
    "nuxt-socket-io",
    // Docs: https://sentry.nuxtjs.org/guide/usage
    // "@nuxtjs/sentry",
    // Docs: https://github.com/nuxt-community/nuxt-logrocket
    "nuxt-logrocket",
  ],

  io: {
    sockets: [
      {
        name: "home",
        url: "http://localhost:4000",
        default: true,
        vuex: {
          connection: "socket/SET_CONNECTION_ID",
        },
        namespaces: {},
      },
    ],
    server: {
      cors: {
        origin: ["http://localhost:3000"],
      },
    },
  },

  logRocket: {
    // configure LogRocket
    logRocketId: "vxnps8/test",
    devModeAllowed: true,
  },

  // sentry: {
  //   dsn: "https://481a5ebf85094cd0b30685d62b679560@o4504022216540160.ingest.sentry.io/4504022356328448",
  //   debug: true,

  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
