function verify(itemID) {
    // Synchronously checks inventory for the item
    console.log("Checking inventory...");
    // Mock inventory check
    const inStock = true;
    if (!inStock) {
        console.log("Item is out of stock.");
        return false;
    }
    console.log("Item is in stock.");
    return true;
}

function calculateShipping(address) {
 // Synchronously calculates shipping cost based on address
    console.log("Calculating shipping cost...");
    // Mock shipping cost calculation
    const shippingCost = 5.99;
    console.log(`Shipping cost is $${shippingCost}`);
    return shippingCost;
}

function processPayment(paymentDetails, amount) {
    // Synchronously processes payment
    console.log("Processing payment...");
    // Mock payment processing
    const paymentSuccessful = true;
    if (!paymentSuccessful) {
        console.log("Payment failed.");
        return false;
    }
    console.log("Payment successful!");
    return true;
}

// Usage in checkout
const itemID = "12345";
const address = "123 Main St, City, Country";
const paymentDetails = { cardNumber: "1234-5678-8765-4321" };

if (verify(itemID)) {
    const shippingCost = calculateShipping(address);
    const totalAmount = 49.99 + shippingCost;
    if (processPayment(paymentDetails, totalAmount)) {
        console.log("Order placed successfully!");
    }
}
