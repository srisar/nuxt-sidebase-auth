<script setup lang="ts">
import { useAuthData } from '~/composables/useAppAuth';

const { user, isAuthenticated } = useAuthData();
const { signOut } = useAuth();
</script>

<template>
   <NuxtLayout>
      <header class="app-header">
         <nav class="flex w-full gap-5">
            <!-- left side -->
            <div class="flex-1 flex gap-5">
               <NuxtLink class="link pr-5 border-r-2 border-amber-300" to="/">
                  🏠 Home
               </NuxtLink>
               <NuxtLink class="link" to="/protected/admin-only">
                  Admin only
               </NuxtLink>
               <NuxtLink class="link" to="/protected/customer-only">
                  Customer only
               </NuxtLink>
            </div>

            <!-- right side -->
            <div>
               <div v-if="isAuthenticated">
                  <UButton @click="signOut()">
                     Logout, {{ user?.fullName }}
                  </UButton>
               </div>
               <div v-else>
                  <UButton class="uppercase" to="/login">
                     Login 🚀
                  </UButton>
               </div>
            </div>
         </nav>
      </header>

      <NuxtPage />
   </NuxtLayout>
</template>

<style lang="postcss">
.link {
   @apply uppercase text-sm font-bold flex items-center justify-center;
   @apply hover:text-amber-500;
   @apply transition-all;
}

.app-header {
   @apply bg-amber-100 p-5 mb-10 border border-amber-200 rounded-2xl shadow-xl shadow-amber-100;
   @apply hover:shadow-2xl hover:shadow-amber-300;
   @apply transition-all duration-300;
}

.login-name{
   @apply font-bold uppercase text-sm;
   @apply text-amber-500;
}
</style>
