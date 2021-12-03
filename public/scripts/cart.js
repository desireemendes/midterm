

$(document).ready(function() {

$(".order-page").click(function(){
  const id = $(this).attr("id")
$.ajax({
  url:`/order/${id}`,
  method:"get",
  success:function(data){
    console.log(data);
    let carts = [];
    carts.push(data.result);
    let oldcartcontent = localStorage.getItem("cart");
    if(oldcartcontent !== null) {
      console.log(oldcartcontent);
      let cartArray = JSON.parse(oldcartcontent);
      //carts = [carts, ...cartArray];
      let newContent = carts.concat(cartArray);

      console.log("What is in cart",newContent);

      localStorage.setItem("cart", JSON.stringify(newContent));

    } else {
         //save to local storage
       localStorage.setItem("cart",JSON.stringify(carts));
    }

  },
  error:function(err){

  }

})


})

// function subTotal(){
//   let subtotal = 0;
//   for (let item of cart){

//   }
// }

function createCart(cart){

  return ` <li> <span class="cart-item-quantity">${cart.quantity}</span>
  <span class="cart-item">${cart.name}</span>
  <span class="cart-item-cost_item">${cart.cost_item * 0.01}</span>

</li>`


}

function showCarts(carts){
  let subtotal = 0;
  for(let cart of carts){
    $(".cart-item-container").append(createCart(cart))
    subtotal += cart.cost_item * 0.01;


  }
  console.log("total>>>>>.",subtotal);
return subtotal;
}

function showTotal(subtotal){
  let tax = subtotal * 0.13;
    let total = subtotal + tax;
 return `
  <div class="cart-total">
    <p>Subtotal: ${subtotal} </p>
    <p>Tax: ${tax} </p>
    <p>Total: ${total} </p>
</div>`
}

function show(){
 // console.log("yeah")
  let cartcontent = localStorage.getItem("cart")
  console.log("items to the cart",cartcontent);
  if(cartcontent !== null) {
    let cartArray = JSON.parse(cartcontent);
     let total = showCarts(cartArray);
     document.getElementById("cart-total").innerHTML=showTotal(total);
     localStorage.clear();
      //showTotal(total);

}
}
show();
});
