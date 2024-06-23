<script setup lang="ts">
definePageMeta({
   auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: '/',
   },
});

/* ---------------------------------------------------------------------------------------------- */

const urlQuery = useRoute().query;
const loginErrors = ref('');

if (urlQuery.error && urlQuery.error === 'CredentialsSignin') {
   loginErrors.value = 'Username or password is invalid.';
}

/* ---------------------------------------------------------------------------------------------- */

const formFields = reactive({
   email: 'kumar@hello.com',
   password: 'password',
   remember: false,
});

const { signIn, data } = useAuth();
//
// if (data.value) {
//    const apiToken = useCookie('api-token');
//    apiToken.value = data.value.user.token;
//
//    navigateTo('/');
// }

/**
 * Handle login button
 */
async function handleLogin() {
   try {
      await signIn('credentials', {
         username: formFields.email,
         password: formFields.password,
      });
   }
   catch (e) {
      loginErrors.value = 'Please check your email and password.';
   }
}
</script>

<template>
   <main class="flex w-full flex-col items-center">
      <section class="max-w-sm w-full bg-amber-50 flex p-5 rounded-2xl border border-amber-100">
         <div class="w-full flex flex-col gap-5">
            <header>
               <h3 class="text-2xl font-bold text-amber-500">
                  Welcome back,
               </h3>
               <p class="text-sm text-amber-300">
                  Use email and password to login
               </p>
            </header>

            <UFormGroup label="Email">
               <UInput v-model="formFields.email" />
            </UFormGroup>

            <UFormGroup label="Password">
               <UInput v-model="formFields.password" type="password" />
            </UFormGroup>

            <UFormGroup>
               <UCheckbox v-model="formFields.remember" label="Remember me" />
            </UFormGroup>

            <footer>
               <UButton label="Login" block @click="handleLogin()" />
            </footer>

            <footer>
               <UButton label="Github Login" block @click="signIn('github')" />
            </footer>

            <div v-if="loginErrors" class="text-red-500 text-sm bg-red-100 p-2 rounded-xl">
               {{ loginErrors }}
            </div>
         </div>
      </section>
   </main>
</template>

<style scoped>

</style>
