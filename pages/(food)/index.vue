<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useDrinks();

useHead({
  title: "Home Page",
});
</script>
