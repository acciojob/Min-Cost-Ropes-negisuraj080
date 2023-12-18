function mincost(arr) {
  let totalCost = 0;

  // Continue until there is only one rope left
  while (arr.length > 1) {
    // Sort the array in ascending order (smallest ropes first)
    arr.sort((a, b) => a - b);

    // Take the two smallest ropes
    const firstMin = arr.shift();
    const secondMin = arr.shift();

    // Calculate the current cost
    const currentCost = firstMin + secondMin;

    // Add the current cost to the total
    totalCost += currentCost;

    // Insert the combined rope back into the array
    arr.push(currentCost);
  }

  return totalCost;
}

module.exports=mincost;
