<template>
  <h1>Catalog Page</h1>
  <p>This is the catalog page</p>
</template>
<script setup lang="ts">
  useHead({
    title: useAppConfig().entitle("The Product Catalog")
  })
</script>