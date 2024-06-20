<script setup lang="ts">
const formFields = reactive({
   email: 'dave@hello.com',
   password: 'password2',
   remember: false,
});


const loginErrors = ref('');

/**
 * Handle login button
 */
async function handleLogin() {
   try {

      return navigateTo('/');
   }
   catch (e) {
      loginErrors.value = 'Please check your email and password.';
   }
}
</script>

<template>
   <main class="flex w-full flex-col items-center">
      <section class="max-w-sm w-full bg-amber-50 flex p-5 rounded-2xl border border-amber-100">
         <form action="" class="w-full flex flex-col gap-5">
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

            <div v-if="loginErrors" class="text-red-500 text-sm bg-red-100 p-2 rounded-xl">
               {{ loginErrors }}
            </div>
         </form>
      </section>
   </main>
</template>

<style scoped>

</style>
