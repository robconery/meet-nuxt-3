<template>

  <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
    {{doc.title}}
  </h1>
  <div class="text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
    <ContentRenderer :value="doc"></ContentRenderer>
    <slot></slot>
  </div>

</template>

<script setup>

defineProps({
  doc: Object
});

</script>