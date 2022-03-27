function updateProductQuantity(isIncreasing){
    const productValue = document.getElementById('phone-quantity');
    const productQuantity = parseInt(productValue.value);
    if(isIncreasing){
        productValue.value = productQuantity + 1;
    }else{
        productValue.value = productQuantity - 1;
    }
}

//! Phone cart
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductQuantity(true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductQuantity(false)
})