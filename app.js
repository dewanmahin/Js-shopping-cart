function updateProductQuantity(product, price, isIncreasing){
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
}

//! Phone cart
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductQuantity("phone", 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductQuantity("phone", 1219, false)
})

//! Case cart
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductQuantity("case", 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductQuantity("case", 59, false)
})