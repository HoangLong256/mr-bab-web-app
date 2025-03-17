<template>
  <div>
    <h1>{{ title }}</h1>
    <pre v-if="drink">{{ drink }}</pre>
    <p v-else>No drink found</p>
  </div>
</template>

<script setup lang="ts">
const { title } = useRoute().params;

const { drink, status } = await useGetDrinkById(title as string);
</script>
