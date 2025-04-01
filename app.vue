<template>
  <div class="mr-bab-web-app bg-gray-50 text-gray-900">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
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
