<script setup lang="ts">
definePageMeta({
   middleware: ['admin-only'],
});
</script>

<template>
   <main>
      <h1 class=" text-center text-3xl font-bold uppercase text-amber-500">
         Admin only page
      </h1>

      <p>This page is only available for admin users.</p>
   </main>
</template>

<style scoped>

</style>
