<script setup lang="ts">
import { useAuthData } from '~/composables/useAppAuth';

/* ---------------------------------------------------------------------------------------------- */

definePageMeta({
   // auth: false,
});

/* ---------------------------------------------------------------------------------------------- */

const { apiToken } = useAuthData();

// const { status, data } = useAuth();
//
// if (data.value) {
//    const apiToken = useCookie('api-token');
//    apiToken.value = data.value.user.token;
// }

async function handleFetchUser() {
   try {
      const response = await $fetch('/user/1', {
         baseURL: useRuntimeConfig().public.baseURL,
         headers: {
            Authorization: `Bearer ${apiToken.value}`,
         },
      });

      console.log(response);
   }
   catch (e) {
      console.log(e);
   }
}
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
         <pre>apiToken: {{ apiToken }}</pre>
         <!--         <pre>{{ data }}</pre> -->

         <UButton @click="handleFetchUser()">
            Fetch User Data
         </UButton>
      </div>

      <div class="max-w-xl bg-amber-50 p-5 mx-auto">
      </div>
   </main>
</template>

<style scoped>

</style>
