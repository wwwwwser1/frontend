<template>
<section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Shop Cart</h1>
          <div class="breadcrumb">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><a href="shop.html">Shop</a></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><a href="shop-cart.html">Shop Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--================ Our banner Section end =================-->
    <section class="pad95-100-top-bottom shop-card-1">
      <div class="container">
        <h3 class="main hdi">Shopping cart</h3>
        <!--=========Cart Table start============-->
        <div class="cart-table">
          <ul class="cart-table-top">
            <li class="cart-wdt1">
              Product
            </li>
            <li class="cart-wdt2">
              Price
            </li>
            <li class="cart-wdt2">
              qty
            </li>
            <li class="cart-wdt2">
              subtotal
            </li>
            <li class="cart-wdt3">
              &nbsp;
            </li>
          </ul>
          <ul class="cart-table-top cart-table-mid">
            <li class="cart-wdt1">
              <span class="cartproduct-img"><img src="@/assets/images/shop-card/shop-card-img.jpg" alt="cart-image"></span>
              <div class="cartproduct-desc">
                <h4 class="dumble">Dumbbells</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium doloremque laudantium
                  totam rem aperiam</p>
              </div>
            </li>
            <li class="cart-wdt2 margin-txt">
              <span class="prdt-price ">$1,999</span>
            </li>
            <li class="cart-wdt2 margin-txt">
              <select class="cart-prdt-qty">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li class="cart-wdt2 margin-txt">
              <span class="prdt-price">$1,999</span>
            </li>
            <li class="cart-wdt3 margin-txt">
              <a href="#"><img src="@/assets/images/shop-card/delete-icon.png" width="16" height="22" alt="cart-image"> </a>
            </li>
          </ul>
          <ul class="cart-table-top cart-table-mid">
            <li class="cart-wdt1">
              <span class="cartproduct-img"><img src="@/assets/images/shop-card/shop-card-img.2.jpg" alt=""></span>
              <div class="cartproduct-desc">
                <h4>Fitness Product</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium doloremque laudantium
                  totam rem aperiam</p>
              </div>
            </li>
            <li class="cart-wdt2 margin-txt">
              <span class="prdt-price ">$1,999</span>
            </li>
            <li class="cart-wdt2 margin-txt">
              <select class="cart-prdt-qty">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li class="cart-wdt2 margin-txt">
              <span class="prdt-price">$1,999</span>
            </li>
            <li class="cart-wdt3 margin-txt">
              <a href="#"><img src="@/assets/images/shop-card/delete-icon.png" width="16" height="22" alt="cart-image"> </a>
            </li>
          </ul>
          <ul class="cart-table-top cart-table-btm">
            <li><a class="continue-shop" href="#">Continue Shopping</a></li>
            <li><a class="continue-shop clear-shoppingbtn" href="#">Clear Shopping Cart</a></li>
            <li class="pull-right">
              <div class="btn-123">
                <div class="sim-button button8">
                  <span>Update Shopping Cart</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--=========Cart Table end============-->

        
        <!--=========Your Order start============-->
        
        <div class="discount-codes your-order">
          <h4>Your Order</h4>
          <ul class="order-lst">
            <li>
              <span class="span1">Subtotal</span>
              <span class="span2">$1,999</span>
            </li>
            <li>
              <span class="span1"><strong>Grand Total</strong></span>
              <span class="span2"><strong>$1,999</strong></span>
            </li>
          </ul>
          <div class="btn-12">
            <div class="sim-button button8">
              <span>Proceed To Checkout</span>
            </div>
          </div>
          <!--=========Your Order end============-->
        </div>
      </div>
    </section>
    
 
 </section>
    <!--================ Our footer Section start=================-->
</template>

<script>
</script>

<style>
</style>
