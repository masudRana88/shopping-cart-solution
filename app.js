//product change
function changeProduct(product, price, increase){
    const productElement = document.getElementById(product + '-number');
    const productInText = productElement.value;
    let productInNumber = parseInt(productInText);
    if(increase == true){
        productInNumber = productInNumber + 1;
    }
    else if (productInNumber > 0){
        productInNumber = productInNumber - 1;
    }
    // ipdate product
    productElement.value = productInNumber;
    // update price
    const totalPrice = document.getElementById(product +'-total-price');
    totalPrice.innerText = productInNumber * price;
    // update total price 
    calculateTotalPrice();
}
// calculate total price
function calculateTotalPrice(){
    // get phone price
    const phonePriceText = document.getElementById('phone-total-price').innerText;
    const phonePrice = parseInt(phonePriceText);
    // get case price
    const casePriceText = document.getElementById('case-total-price').innerText;
    const casePrice = parseInt(casePriceText);
    // updaet subtotal price
    const subTotalPrice = document.getElementById('sub-total');
    const subTotalAmount = phonePrice + casePrice;
    subTotalPrice.innerText = subTotalAmount;
    const tex = document.getElementById('tax-amount');
    const texAmount = subTotalAmount / 10;
    tex.innerText = texAmount;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = texAmount + subTotalAmount;
}
//phpne pluse handeler
document.getElementById('phone-plus').addEventListener('click', function(){
    changeProduct('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    changeProduct('phone', 1219, false);
});
// case pluse handeler
document.getElementById('case-plus').addEventListener('click', function(){
    changeProduct('case', 59, true);
});
// case minus handaler
document.getElementById('case-minus').addEventListener('click', function(){
    changeProduct('case', 59, false);
});
