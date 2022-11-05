<template>
  <div>
    <!--Nav-->
    <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
            <span class="text-2xl pl-2"><i class="em em-grinning">{{heading}}</i></span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-3" v-for="link in links" :key="link.url">
              <a 
              class="inline-block text-gray-200 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" 
              :href="link.url" >{{link.text}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--Container-->
    <div class="container mx-auto bg-white mt-24 md:mt-16 h-screen">
      <NuxtPage />
    </div>

  </div>
</template>
<script setup lang="ts">
const config = useAppConfig();
useHead({
  title: config.title,
});
const heading = config.siteName;
const links = [
  {text: "Archives", url: "https://archive.redfour.io"},
  {text: "Catalog", url: "/products/"}
];
</script>
