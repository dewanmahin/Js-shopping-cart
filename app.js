document.getElementById('phone-plus').addEventListener('click', function(){
    const productValue = document.getElementById('phone-quantity');
    const productQuantity = parseInt(productValue.value);
    productValue.value = productQuantity + 1;
})
document.getElementById('phone-minus').addEventListener('click', function(){
    const productValue = document.getElementById('phone-quantity');
    const productQuantity = parseInt(productValue.value);
    productValue.value = productQuantity - 1;
})