import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  tailwindcss: {
    viewer: true,
    config: {
      plugins: [tailwindTypography],
    },
  },
});
