<template>
  <main class="bg-slate-50 min-h-dvh text-black">
    <Header />
    <UContainer
      :ui="{
        base: 'mx-auto',
        padding: 'py-8',
        constrained: 'max-w-7xl',
      }"
    >
      <slot />
    </UContainer>
  </main>
</template>
