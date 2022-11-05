<template>
  <div class="container px-4 py-4">
    <section id="hero">
      <HeroTextRight :doc="page.headline">
        <HeroButton link="#offers">
          Buy Now!
        </HeroButton>
      </HeroTextRight>
    </section>
    <section id="agitation" class="my-8">
      <TextCenteredHeadline :doc="page.agitation"></TextCenteredHeadline>
    </section>
    <section id="problem" class="my-8">
      <TextCenteredHeadline :doc="page.problem"></TextCenteredHeadline>
    </section>
    <section id="solution" class="my-8">
      <TextCenteredHeadline :doc="page.solution"></TextCenteredHeadline>
      <div class="container px-5 my-12 mx-auto">
        <div class="flex flex-wrap -m-4" id="offers">
          <div class="p-4 md:w-1/2" v-for="(offer, idx) in offers" :key="idx">
            <CommerceOffer :offer="offer"></CommerceOffer>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" 
              v-for="(testimonial,idx) in page.testimonials" 
              :key="idx">
            <TestimonialGray :testimonial="testimonial"></TestimonialGray>
          </div>
        </div>
      </div>
    </section>
    <section id="proof" class="my-8">
      <TextCenteredHeadline :doc="page.proof"></TextCenteredHeadline>
    </section>
    <section id="guarantee" class="my-8">
      <TextCenteredHeadline :doc="page.guarantee"></TextCenteredHeadline>
    </section>
  </div>
  
</template>

<script setup>
import { useSalesStore } from "@/stores/sales.js";

const store = useSalesStore();
const route = useRoute();

//load the page
await store.loadPage(route.params.sku);
await store.loadOffers(route.params.sku);

const offers = store.offers;
const page = store.salesPage;
const {$seo} = useNuxtApp();
const head = $seo(page.solution);
useHead(head);

</script>
