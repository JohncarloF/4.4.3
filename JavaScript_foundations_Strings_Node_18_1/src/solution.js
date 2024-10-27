/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  // Check if the products array is empty or not provided
  if (!products || products.length === 0) {
    // Return a message indicating no items are for sale
    return "There are no items for sale.";
  }

  // Get the number of items in the products array
  const itemCount = products.length;

  // Create an array of item names by mapping over the products array
  const itemNames = products.map(product => product.name);

  // Handle different cases based on the number of items
  if (itemCount === 1) {
    // If there is exactly one item, return a message with that item's name
    return `There is 1 item for sale: ${itemNames[0]}.`;
  } else if (itemCount === 2) {
    // If there are exactly two items, return a message with both item names
    return `There are 2 items for sale: ${itemNames[0]} and ${itemNames[1]}.`;
  } else {
    // If there are more than two items, return a message with all item names separated by commas
    return `There are ${itemCount} items for sale: ${itemNames.join(', ')}.`;
  }
}

// Export the function for use in other files or for testing
module.exports = {
  listAllItems,
};

