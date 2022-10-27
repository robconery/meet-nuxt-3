import { defineStore } from 'pinia';
import axios from "axios";

export const useSalesStore = defineStore("sales", () => {
  //this is using the global composition API
  const salesPage = ref({});
  const offers = ref({});
  const offer = ref({});

  async function loadPage(sku){
    const copy = await queryContent(`/sales/${sku}`).find();
    this.salesPage.testimonials = [];

    for(let doc of copy){
      if(doc._path.indexOf('testimonials') > 0){
        this.salesPage.testimonials.push(doc);
      }else{
        this.salesPage[doc.slug] = doc;
      }
    }
  }

  async function loadOffer(sku, slug){
    this.offer = await queryContent(`/offers/${sku}/${slug}`).findOne();
  }

  async function loadOffers(sku){
    this.offers = await queryContent(`/offers/${sku}`).find();
  }

  return {salesPage, offers, loadPage, loadOffers, loadOffer, offer }
});







