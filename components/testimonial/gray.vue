<template>
  <div class="h-full text-center bg-slate-200 py-8 rounded-lg">
    <img 
      alt="testimonial" 
      class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
      src="https://dummyimage.com/302x302">
    <ContentRenderer :value="testimonial"></ContentRenderer>
    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
    <h2 
      class="text-gray-900 font-medium title-font tracking-wider text-sm">
        {{testimonial.name}}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  testimonial: Object
})
</script>
