<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page</p>
    <pre>{{ status }}</pre>
    <pre>{{ drinks }}</pre>
  </div>
</template>

<script setup lang="ts">
const { drinks, status } = await useGetDrinkByTitle("Mango Fruit Teas");

useHead({
  title: "Home Page",
});
</script>
