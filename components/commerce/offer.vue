<template>
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center" 
         src="https://dummyimage.com/720x400" 
         alt="blog">
    <div class="p-6">
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        {{offer.title}}
      </h1>
      <p class="leading-relaxed mb-3">{{offer.description}}</p>
      <div class="flex items-center flex-wrap ">
        <HeroButton :link="`/checkout/${offer.sku}/${offer.slug}`">
          {{offer.cta}}
        </HeroButton>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  offer: Object
})
</script>