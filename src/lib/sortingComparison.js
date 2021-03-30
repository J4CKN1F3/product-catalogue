export function compareH(a, b) {
  // Use toUpperCase() to ignore character casing
  const priceA = parseFloat(a.Price.replace(",", ""));
  const priceB = parseFloat(b.Price.replace(",", ""));

  let comparison = 0;
  if (priceA > priceB) {
    comparison = 1;
  } else if (priceA < priceB) {
    comparison = -1;
  }
  return comparison * -1;
}
export function compareL(a, b) {
  // Use toUpperCase() to ignore character casing
  const priceA = parseFloat(a.Price.replace(",", ""));
  const priceB = parseFloat(b.Price.replace(",", ""));

  let comparison = 0;
  if (priceA > priceB) {
    comparison = 1;
  } else if (priceA < priceB) {
    comparison = -1;
  }
  return comparison;
}
export function compareR(a, b) {
  // Use toUpperCase() to ignore character casing
  const codeA = a.ProductId;
  const codeB = b.ProductId;

  let comparison = 0;
  if (codeA > codeB) {
    comparison = 1;
  } else if (codeA < codeB) {
    comparison = -1;
  }
  return comparison;
}
