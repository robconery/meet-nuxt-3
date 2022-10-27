import { defineStore } from 'pinia';
import axios from "axios";

export const useCheckoutStore = defineStore("checkout", () => {
  
  const order = reactive({
    offer: null,
    billing:{name: "",email: "",country: "", zip: "", card: "4111 1111 1111 1111"},
    shipping: { rate: null, name: "", street: "", city: "", state: "", country: "", zip: ""}
  });

  // no need for reactiveness here
  const shipping = [];

  async function prepareOrder(offer, sku){
    console.log("Running preorder");
    //get the shipping rates
    const rates = await axios.post('http://localhost:3000/api/shipping', {sku: sku});
    this.shipping = rates.data;
    this.order.offer = offer.slug;
    this.order.shipping.rate = rates.data[0].cost;
    this.order.total = computed(() => offer.price + this.order.shipping.rate);
  }

  return {order, shipping, prepareOrder}
});