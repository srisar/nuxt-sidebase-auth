<script setup lang="ts">
definePageMeta({
   middleware: [],
});

const { data } = useAuth();

if (data.value?.user.role !== 'ADMINX') {
   navigateTo('/');
}
</script>

<template>
   <main>
      <h1 class=" text-center text-3xl font-bold uppercase text-amber-500">
         Admin only page
      </h1>

      <p>This page is only available for admin users.</p>

      <pre>{{ data }}</pre>
   </main>
</template>

<style scoped>

</style>
