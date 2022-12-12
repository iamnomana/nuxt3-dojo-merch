// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Loading",
      titleTemplate: "%s | DIV Merch",
      meta: [{ name: "description", content: "Everything about Dojo Merch" }],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
