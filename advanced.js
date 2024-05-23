const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  // 1. Log Products
  products.map((product) => product.product).join(", "),

  // 2. Filter by Name Length
  products.filter((product) => product.product.length <= 5),

  // 3. Price Manipulation
  products
    .filter((product) => product.price.trim() !== "")
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  // 4. Concatenate Product Names
  products.reduce((acc, product) => acc + product.product, ""),

  // 5. Find Extremes in Prices
  (() => {
    const pricedProducts = products
      .filter((product) => product.price.trim() !== "")
      .map((product) => ({ ...product, price: Number(product.price) }));
    const highest = pricedProducts.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    const lowest = pricedProducts.reduce((min, product) =>
      product.price < min.price ? product : min
    );
    return `
    Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })()
);
