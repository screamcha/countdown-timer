export const getQuantityWithLabel = (label, quantity) =>
  `${quantity} ${quantity === 1 ? label : `${label}s`}`
