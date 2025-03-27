<template>
  <div class="mr-bab-web-app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    { charset: 'utf-8', 'data-n-head': 'ssr' },
    {
      name: 'description',
      content: () => 'Mr.Bab website',
    },
    { content: 'Mr.Bab', name: 'author' },
  ],
  titleTemplate: title => (title ? `${title} | Mr.Bab` : 'Mr.Bab'),
});
</script>
