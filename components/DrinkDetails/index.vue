<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="col-span-1 overflow-hidden">
      <div class="w-full h-full bg-slate-200">
        <pre>{{ drink }}</pre>
      </div>
    </div>
    <div class="col-span-1 flex flex-col gap-2">
      <h2 class="text-xl font-semibold">{{ drink.title }}</h2>

      <div class="text-xl font-semibold">£ {{ price }}</div>

      <p class="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus molestias error, corporis nesciunt quas
        molestiae dolorem incidunt ullam ab placeat, provident ex labore alias voluptas doloribus debitis eum! Magni.
      </p>

      <div>
        <h3 class="text-md font-medium">Sizes</h3>
        <div class="flex flex-wrap gap-2 mt-1">
          <UBadge
            v-for="size in drink.sizes"
            :key="size"
            class="cursor-pointer"
            variant="outline"
            color="neutral"
            size="lg"
            :class="{ 'bg-blue-100 text-blue-700': selectedSize === size }"
            @click="selectedSize = size"
          >
            <UTooltip :text="getTooltipPrice(size)" :content="{ side: 'top' }">
              <div>{{ size.split('-')[0] }}</div>
            </UTooltip>
          </UBadge>
        </div>
      </div>

      <div>
        <h3 class="text-md font-medium">Sugar Levels</h3>
        <div class="flex flex-wrap gap-2 mt-1">
          <UTooltip :text="'Fock ooff'">
            <UBadge
              v-for="sugarLevel in drink.sugarLevels"
              :key="sugarLevel"
              class="cursor-pointer"
              variant="outline"
              color="neutral"
              size="lg"
              :class="{ 'bg-blue-100 text-blue-700': selectedSugarLevel === sugarLevel }"
              :label="sugarLevel"
              @click="selectedSugarLevel = sugarLevel"
            />
          </UTooltip>
        </div>
      </div>

      <div>
        <h3 class="text-md font-medium">Ice Levels</h3>
        <div class="flex flex-wrap gap-2 mt-1">
          <UBadge
            v-for="iceLevel in drink.iceLevels"
            :key="iceLevel"
            class="cursor-pointer"
            variant="outline"
            color="neutral"
            size="lg"
            :class="{ 'bg-blue-100 text-blue-700': selectedIceLevel === iceLevel }"
            :label="iceLevel"
            @click="selectedIceLevel = iceLevel"
          />
        </div>
      </div>

      <div>
        <h3 class="text-md font-medium">Toppings</h3>
        <div class="flex flex-wrap gap-2 mt-1">
          <UBadge
            v-for="topping in drink.toppings"
            :key="topping.id"
            class="cursor-pointer"
            variant="outline"
            color="neutral"
            size="lg"
            :class="{ 'bg-blue-100 text-blue-700': selectedTopping.includes(topping.id) }"
            @click="handleToppingClick(topping.id)"
          >
            <UTooltip :text="`+£${topping.price}`" :content="{ side: 'top' }">
              <div>{{ topping.title }}</div>
            </UTooltip>
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Drink } from '~/shared/models/dto/drink.model';

const props = defineProps<{
  drink: Drink;
}>();

const selectedIceLevel = ref<string | null>(null);

const selectedSugarLevel = ref<string | null>(null);

const selectedSize = ref<string | null>(props.drink.sizes?.[0] ?? null);

const selectedTopping = ref<string[]>([]);

const price = computed(() => {
  const basePrice = props.drink.price ?? 0;
  const sizePrice = Number(selectedSize.value?.split('-')[1] ?? 0);
  const toppingPrice = selectedTopping.value.reduce((acc, toppingId) => {
    const topping = props.drink.toppings?.find(t => t.id === toppingId);
    return acc + (topping?.price ?? 0);
  }, 0);

  const totalPrice = basePrice + sizePrice + toppingPrice;
  return totalPrice.toFixed(2);
});

const handleToppingClick = (toppingId: string) => {
  if (selectedTopping.value.includes(toppingId)) {
    selectedTopping.value = selectedTopping.value.filter(id => id !== toppingId);
  } else {
    selectedTopping.value.push(toppingId);
  }
};

function getTooltipPrice(text: string) {
  const price = Number(text.split('-')[1].trim() ?? 0);

  return `+£${price}`;
}
</script>
