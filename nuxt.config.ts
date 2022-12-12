// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s | DIV Merch",
      meta: [{ name: "description", content: "Everything about Dojo Merch" }],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
