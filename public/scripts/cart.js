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

function createCart(cart){
  return ` <li> <span class="cart-item-quantity">${cart.quantity}</span>
  <span class="cart-item">${cart.name}</span>
  <span class="cart-item-cost_item">${cart.cost_item * 0.01}</span>
</li>`

}
function showCarts(carts){
  for(let cart of carts){
    $(".cart-item-container").append(createCart(cart))
  }


}

function show(){
  console.log("yeah")
  let cartcontent = localStorage.getItem("cart")
  if(cartcontent !== null) {
    let cartArray = JSON.parse(cartcontent);
      showCarts(cartArray);
  }
}
show();
});
