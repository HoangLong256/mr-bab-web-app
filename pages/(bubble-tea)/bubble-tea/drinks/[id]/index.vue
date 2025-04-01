<template>
  <DrinkDetails v-if="drink" :drink="drink" />
  <div v-else>Not found</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const { drink } = await useGetDrinkById(id as string);

useHead({
  title: () => drink.value?.title,
});
</script>
