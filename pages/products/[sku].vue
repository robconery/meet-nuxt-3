<template>
  <h1>{{headline.title}}</h1>
</template>

<script setup>
const route = useRoute()
const copy = await queryContent(`/sales/${route.params.sku}`).find();
const headline = copy.find(c => c.slug === "headline");
</script>