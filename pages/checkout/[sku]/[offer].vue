<template>

<div class="container">
  <div class="flex flex-row mt-8">
    <HeroVertical :doc="salesStore.offer" class="mt-12 w-full lg:w-1/2 lg:px-12"></HeroVertical>
    <CommerceCheckoutForm class="mt-8"></CommerceCheckoutForm>
  </div>
</div>


</template>

<script setup>

import { useSalesStore } from "@/stores/sales.js";
import { useCheckoutStore } from "@/stores/checkout.js";

const salesStore = useSalesStore();
const checkoutStore = useCheckoutStore();
const route = useRoute();

await salesStore.loadOffer(route.params.sku,route.params.offer);
await checkoutStore.prepareOrder(salesStore.offer, route.params.sku);

</script>
