<template>
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a :href="`/products/${listing.sku}`">
        <img class="object-center" :src="listing.image">
      </a>
      <div class="p-4">
        <h2 class="text-2xl text-gray-900 mb-3">
          {{listing.title}}
        </h2>
        <p class="leading-relaxed mb-3">{{listing.description}}</p>
        <div class="flex items-center flex-wrap ">
          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

</template>
<script setup>

defineProps(["listing"]);

</script>