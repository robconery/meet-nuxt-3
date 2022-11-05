<template>
  <div class="leading-loose">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" @submit.prevent="runCheckout">
    <p class="text-gray-800 font-medium">Billing information</p>
    <div class="">
      <input class="form-input" placeholder="Name" v-model="billing.name">
    </div>
    <div class="mt-2">
      <input class="form-input" placeholder="Email"  v-model="billing.email">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <input class="form-input" placeholder="Country" v-model="billing.country">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <input class="form-input" v-model="billing.zip" placeholder="Zip">
    </div>

    <p class="text-gray-800 font-medium">Shipping</p>
    <div class="mt-2">
      <select class="px-4 py-3 rounded" v-model="shipping.rate">
        <option v-for="(rate,idx) in calculateRates()" 
                :key="idx" 
                :value="rate.rate">
                  {{rate.name}}: ${{rate.rate}}.00
        </option>
      </select>
    </div>

    <div class="mt-2">
      <input class="form-input" placeholder="Ship To" v-model="shipping.name">
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
      <input class="form-input" placeholder="Street"  v-model="shipping.street">
    </div>
    <div class="mt-2">
      <input class="form-input" placeholder="City"  v-model="shipping.city">
    </div>
    <div class="mt-2">
      <input class="form-input" placeholder="State"  v-model="shipping.state">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <input class="form-input" placeholder="Country" v-model="shipping.country">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <input class="form-input" v-model="shipping.zip" placeholder="Zip">
    </div>
    <p class="mt-4 text-gray-800 font-medium">Credit Card</p>
    <div class="">
      <input class="form-input" placeholder="Card Number MM/YY CVC" v-model="billing.card">
    </div>
    <div class="mt-4" v-if="salesStore.offer">
      <button class="px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded w-full shadow" type="submit">{{cta}}</button>
    </div>
  </form>
</div>
</template>

<script setup>

import { useSalesStore } from "@/stores/sales.js";
import { useCheckoutStore } from "@/stores/checkout.js";

onMounted(()=> {
  console.log("HEY, I'm Called!");
})

const runCheckout = async function(){
  //run client side validation
  //call out to Stripe to verify card/customer
  //hand the resulting charge information to our server
  //redirect to a thank you page
  //alert("Order Submitted!")
  console.log(checkoutStore.order);
}

const salesStore = useSalesStore();
const checkoutStore = useCheckoutStore();
const billing = checkoutStore.order.billing;
const shipping = checkoutStore.order.shipping;

//HACK: this needs to be in a serverless function
const calculateRates = function(){
  const rates = [];
  //get the weight from the offer
  const weight = salesStore.offer.weight;
  for(let rate of checkoutStore.shipping){
    rates.push({
      name: rate.name,
      rate: rate.rate,
      cost: rate.rate * weight
    });
  }
 return rates;
}

const cta = computed(() => {
  return `${salesStore.offer.cta} $${checkoutStore.order.total}.00`
});
</script>

<style>

</style>