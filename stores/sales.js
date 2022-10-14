import { defineStore } from 'pinia';

export const useSalesStore = defineStore("sales", () => {
  //this is using the global composition API
  const salesPage = ref({});
  
  async function loadPage(sku){
    const copy = await queryContent(`/sales/${sku}`).find();
    //special place to hold testimonials
    this.salesPage.testimonials = [];

    for(let doc of copy){
      if(doc._path.indexOf('testimonials') > 0){
        this.salesPage.testimonials.push(doc);
      }else{
        this.salesPage[doc.slug] = doc;
      }
    }
  }

  const offers = ref({});
  
  async function loadOffers(sku){
    this.offers = await queryContent(`/offers/${sku}`).find();
  }

  return {salesPage, offers, loadPage, loadOffers }
});







