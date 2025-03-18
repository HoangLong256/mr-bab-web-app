<template>
  <div class="mr-bab-web-app">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (title) => (title ? `${title} | Mr.Bab` : "Mr.Bab"),
  meta: [
    { charset: "utf-8", "data-n-head": "ssr" },
    {
      name: "description",
      content: () => "Mr.Bab website",
    },
    { name: "author", content: "Mr.Bab" },
  ],
});
</script>
