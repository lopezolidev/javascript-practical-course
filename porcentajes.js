
function calculateDiscount (price, discount) {
    const factor = (100 - discount) / 100;
    const priceDiscounted = price * factor;
    const result = document.getElementById("result");
    result.innerText = "Your price with discount is: $" + priceDiscounted;
}

function priceAndDiscount () {
    const price = document.getElementById("price");
    const priceValue = price.value;
    const discount = document.getElementById("discount");
    const discountValue = discount.value;
    calculateDiscount(priceValue, discountValue);
}