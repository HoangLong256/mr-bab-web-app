<template>
  <div v-if="drink" class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100">
    <div class="col-span-1 overflow-hidden">
      <pre>{{ drink }}</pre>
      <pre>{{ status }}</pre>
    </div>
    <div class="col-span-1 flex flex-col gap-4">
      <h2 class="text-xl font-semibold">{{ drink.title }}</h2>

      <div>£ {{ price }}</div>

      <div class="flex flex-wrap gap-2">
        <h3 class="text-md font-medium">Sizes</h3>
        <UBadge
          v-for="size in drink.sizes"
          :key="size"
          class="hover:bg-slate-200 cursor-pointer"
          :class="{ 'bg-slate-200': selectedSize === size }"
          color="white"
          variant="solid"
          :label="size.split('-')[0]"
          @click="selectedSize = size"
        />
      </div>

      <div class="flex flex-wrap gap-2">
        <h3 class="text-md font-medium">Sugar Levels</h3>
        <UBadge
          v-for="sugarLevel in drink.sugarLevels"
          :key="sugarLevel"
          class="hover:bg-slate-200 cursor-pointer"
          :class="{ 'bg-slate-200': selectedSugarLevel === sugarLevel }"
          color="white"
          variant="solid"
          :label="sugarLevel"
          @click="selectedSugarLevel = sugarLevel"
        />
      </div>

      <div class="flex flex-wrap gap-2">
        <h3 class="text-md font-medium">Ice Levels</h3>
        <UBadge
          v-for="iceLevel in drink.iceLevels"
          :key="iceLevel"
          class="hover:bg-slate-200 cursor-pointer"
          :class="{ 'bg-slate-200': selectedIceLevel === iceLevel }"
          color="white"
          variant="solid"
          :label="iceLevel"
          @click="selectedIceLevel = iceLevel"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <p>No drink found</p>
  </div>
</template>

<script setup lang="ts">
import { UBadge } from '#components';

const { id } = useRoute().params;

const { drink, status } = await useGetDrinkById(id as string);

const selectedIceLevel = ref<string | null>(null);

const selectedSugarLevel = ref<string | null>(null);

const selectedSize = ref<string | null>(drink.value?.sizes?.[0] ?? null);

const price = computed(() => {
  const basePrice = drink.value?.price ?? 0;
  const sizePrice = Number(selectedSize.value?.split('-')[1] ?? 0);
  return basePrice + sizePrice;
});

useHead({
  title: () => drink.value?.title,
});
</script>
