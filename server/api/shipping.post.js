import shipping from "../data/shipping.json";
import products from "../data/products.json";

export default defineEventHandler(async (event) => {  
  const post = await useBody(event);
  //we should have a product sku here
  const product = products.find(p => p.sku === post.sku);
  if(!product) return [];
  const out = [];
  for(let rate of shipping){
    out.push({
      name: rate.name,
      rate: rate.rate,
      cost: rate.rate * product.weight_pounds
    });
  }
  return out;
});

