import products  from "../data/products.json";
import offers  from "../data/offers.json";
import shipping from "../data/shipping.json";

export default defineEventHandler(async (event) => {  

  const post = await useBody(event);
  let out = {};

  //the post will have an offer SKU and charge information
  //from Stripe. Validate the charge amount with the products and shipping data
  //this is where you would access your database
  const valid = true; 

  //run the charge - stubbing for now
  out.charge = {transaction_id: 123, status: "captured"}

  return {
    success: true,
    orderId: "XYZ",
    charge: charge,
    estimated_delivery: "about 6 hours from now"
  }

});


