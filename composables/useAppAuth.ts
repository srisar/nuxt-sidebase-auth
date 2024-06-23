export function useAuthData() {
   const { data, status } = useAuth();

   const user = computed(() => {
      if (data.value) {
         return data.value.user;
      }
      return null;
   });

   const apiToken = computed(() => {
      if (data.value) {
         return data.value.user.token;
      }
      return '';
   });

   const isAuthenticated = computed(() => {
      return status.value === 'authenticated';
   });

   return {
      user,
      apiToken,
      isAuthenticated,
   };
}
