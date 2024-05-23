// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. ForEach Basics
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation
const upperCaseProvince = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvince);

// 3. Name Lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
const nonCapeProvince = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(nonCapeProvince.length);

// 6. Finding 'S'
const containsS = names.map((name) => name.toLowerCase().includes("s"));
console.log(containsS);

// 7. Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);
