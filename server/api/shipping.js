import shipping from "../data/shipping.json";

export default defineEventHandler(async (event) => {  
  return shipping;
});