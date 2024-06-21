<script setup lang="ts">
/* ---------------------------------------------------------------------------------------------- */

const { status, data } = useAuth();
</script>

<template>
   <main>
      <header class="mb-5">
         <h1 class="text-center text-3xl font-bold">
            Welcome to Nuxt Session Authentication Example
         </h1>
      </header>

      <p class="mb-5 text-center">
         This index page is not protected. It has a dummy api fetch call, which will only work, if
         there is a valid auth. Otherwise, it will automatically redirect to login page.
      </p>

      <div>
         <div class="bg-green-200 p-2 rounded-xl text-center mx-auto max-w-xl mb-5 break-all">
            <p>Your access token is </p>
         </div>
      </div>

      <div class="flex flex-col w-full items-center justify-center mb-5">
         <pre>status: {{ status }}</pre>
         <pre>{{ data }}</pre>
      </div>

      <div class="max-w-xl bg-amber-50 p-5 mx-auto">
      </div>
   </main>
</template>

<style scoped>

</style>
