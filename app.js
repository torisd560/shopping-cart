document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumbers('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumbers('phone', 1219, false)
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumbers('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumbers('case', 59, false)
})

function updateProductNumbers( product, price, isIncreasing){
    const productInput = document.getElementById( product + '-input');
    const productNumbers =productInput.value;
    if(isIncreasing){
       productInput.value = Number(productNumbers)+1;
    }
    else if(productNumbers>0) {
    productInput.value = Number(productNumbers)-1;
  }
  // get phone price and dynamically set phone price
    const totalPrice= document.getElementById( product + '-total');
    totalPrice.innerText = productInput.value * price;
    calculateTotal()
}
function getInputValue( product){
    const productInput = document.getElementById(product +'-input');
    const productNumbers = Number(productInput.value);
    return productNumbers;
}

function calculateTotal(){
   const phoneTotal =getInputValue('phone') *1219;
   const caseTotal = getInputValue('case') *59
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal/10;
   const totalPrice = subTotal + tax;
  
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;
   
   
}







