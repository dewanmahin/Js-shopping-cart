function updateQuantityAndAmount(product, price, isIncreasing){
    const productValue = document.getElementById(product + '-quantity');
    let productQuantity = parseInt(productValue.value);
    // Increase or decrease product quantity
    if(isIncreasing){
        productQuantity = productQuantity + 1;
    }else if(productQuantity > 0){
        productQuantity = productQuantity - 1;
    }
    productValue.value = productQuantity;
    // Update the price amount based on product quantity
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = price * productQuantity;
    // Calculate total
    calculateTotal();
}

function getQuantityValue(product){
    const productQuantityValue = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productQuantityValue.value);
    return productQuantity;
}

function calculateTotal(){
    const phoneTotal = getQuantityValue('phone') * 1219;
    const caseTotal = getQuantityValue('case') * 59;
    // calculate amount
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal * 10) / 100;
    const total = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

//! Phone cart
document.getElementById('phone-plus').addEventListener('click', function(){
    updateQuantityAndAmount("phone", 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateQuantityAndAmount("phone", 1219, false)
})

//! Case cart
document.getElementById('case-plus').addEventListener('click', function(){
    updateQuantityAndAmount("case", 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateQuantityAndAmount("case", 59, false)
})