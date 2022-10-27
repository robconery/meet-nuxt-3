<template>

  <div >
    <img class="rounded mx-auto my-4 shadow" :src="doc.image" />
    <div class="text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{doc.title}}</h1>
      <ContentRenderer :value="doc"></ContentRenderer>
    </div>
  </div>

</template>

<script setup>
defineProps({
  doc: Object
});
</script>

<style>

</style>