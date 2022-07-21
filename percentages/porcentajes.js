


// challenge: Coupons.

function calculateCoupon() {
    const list = [15, 20, 25];
    const coupons = document.getElementById("coupons");
    const couponsValue = parseInt(coupons.value);
    let addition;
    switch (couponsValue) {
        case 15:
            addition = 15;
            break;
        case 20:
            addition = 20;
            break;
        case 25:
            addition = 25;
            break;
        default:
            addition = 0;
    }
    priceAndDiscount(addition)
}

function priceAndDiscount (addition) {
    const price = document.getElementById("price").value;
    const priceValue = parseInt(price);
    console.log(priceValue);
    const discount = document.getElementById("discount").value;
    const discountValue = parseInt(discount);
    console.log(discountValue);
    calculateDiscount(priceValue, discountValue, addition);
}

function calculateDiscount (price, discount, addition) {
    const factor = (100 - (discount + addition) ) / 100;
    const priceDiscounted = parseInt(price * factor);
    const save = price - priceDiscounted
    const result = document.getElementById("result");
    result.innerText = "Your price with discount is: $" + priceDiscounted + ", you saved $" + save;
}

