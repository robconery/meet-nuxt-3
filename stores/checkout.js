import { defineStore } from 'pinia';
import axios from "axios";

export const useCheckoutStore = defineStore("checkout", () => {
  
  const order = reactive({
    offer: null,
    billing:{name: "",email: "",country: "", zip: "", card: "4111 1111 1111 1111"},
    shipping: { rate: null, name: "", street: "", city: "", state: "", country: "", zip: ""}
  });

  // no need for reactiveness here
  const shipping = [
    {
      "rate": 5.00,
      "name": "Ground" 
    },
    {
      "rate": 15.00,
      "name": "Second Day Delivery" 
    },
    {
      "rate": 35.00,
      "name": "Immediate Drone Delivery" 
    },
    {
      "rate": 5635.00,
      "name": "Interplanetary Delivery" 
    }
] ;

  async function prepareOrder(offer, sku){
    //get the shipping rates
    this.order.offer = offer.slug;
    this.order.shipping.rate = this.shipping[0].rate;
    this.order.total = computed(() => offer.price + this.order.shipping.rate);
  
  }

  return {order, shipping, prepareOrder}
});