var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price= Math.floor(Math.random() * 100);
  var itemAdded={itemName:item, itemPrice:price};
  cart.push(itemAdded);
  return `${itemAdded.itemName}`+" has been added to your cart."
  
}


function viewCart() {
  //var cartitems=[];  
  
  if (cart.length===0){
    return (`Your shopping cart is empty.`)
  }
 
  else if(cart.length===1){
      return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0]//.itemPrice}`) 
      }
    
    //${cart[0].itemName} at $${cart[0].itemPrice}.`)
    
  }
    
    
    //for (var i=0; i<cart.length;i++){
     // cartitems.push(`${getCart()[i].itemName} at $${getCart()[i]//.itemPrice}`) 
 //   }
   // }
 // return `In your cart, you have ${cartitems.join(", and ")}`
  //else if (cart.length>1){
    //return `In your cart, you have ${cartitems.join(", and ")}`
  //}
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
