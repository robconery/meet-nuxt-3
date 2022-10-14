<template>
  <a :href="link" 
  class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
    <slot></slot>
  </a>
</template>
<script setup>
defineProps({
  link: String
})
</script>