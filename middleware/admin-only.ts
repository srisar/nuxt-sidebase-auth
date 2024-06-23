export default defineNuxtRouteMiddleware(async () => {
   const { data, signOut } = useAuth();

   if (data.value && data.value.user.role !== 'ADMIN') {
      await signOut();
   }
});
