<template>
  <div class="container px-4 py-4">
    <h1 class="text-3xl text-center">{{title}}</h1>
    <div class="flex flex-wrap">
      <div class="p-4 md:w-1/3" v-for="(listing,idx) in listings" :key="idx">
        <CommerceProductCard :listing="listing"></CommerceProductCard>
      </div>     
    </div>
  </div>

</template>

<script setup>
  const listings = [
    {sku: "liftoff", description: "The Johnny Liftoff Boot", image: "/img/johnny-liftoff.jpg"}
  ];
  const title = "Red:4's Amazing Catalog";

</script>


