// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: ['@nuxt/ui', '@pinia/nuxt', '@sidebase/nuxt-auth'],

   colorMode: {
      preference: 'light',
   },

   runtimeConfig: {
      // eslint-disable-next-line node/prefer-global/process
      jwtSecret: process.env.NUXT_JWT_SECRET, // get it from .env file -> NUXT_SESSION_SECRET
      public: {
         baseURL: 'http://localhost:3333',
      },
   },

   /*
    * Auth
    */

   auth: {
      provider: {
         type: 'authjs',
      },
      globalAppMiddleware: true,
      // eslint-disable-next-line node/prefer-global/process
      baseURL: process.env.AUTH_ORIGIN,
   },

});
