<template>
  <section>
    <div>
      <div class="banner">
        <div class="container">
          <div class="row">
            <h1 class="banner_title">Shop</h1>
            <div class="breadcrumb">
              <ul>
                <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                    </router-link></li>
                <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li><router-link :to="{path:'/shop'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Shop
                    </router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-card">
      <div class="blog_left_sidebar cellpadding">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 left-column shop_del">
              <aside class="blogAside">
               <!-- 	Category-START 	-->
                <div class="recentTitle">
                  <h5 class="h5 as">产品分类</h5>
                </div>
                <ul class="categoriesList normall">
                  <li><router-link :to="{name:'aerobic training'}" tag="a" >有氧健身产品</router-link></li>
                  <li><router-link :to="{name:'strength training'}" tag="a" >力量训练产品</router-link></li>
                  <li><router-link :to="{name:'fight training'}" tag="a" >搏击训练产品</router-link></li>
                  <li><router-link :to="{name:'leisure fitness'}" tag="a" >休闲健身产品</router-link></li>
                  <li><router-link :to="{name:'yoga training'}" tag="a" >瑜伽训练产品</router-link></li>
                </ul>
                <h3 class="pupler-heading">Top Rated Products</h3>
                <div class="Populas">
                  <div class="row">
                    <div class="col-md-4 col-sm-4  col-xs-6 image">
                      <div class="pupler-image">
                        <img src="@/assets/images/Bloge-image/bloge-2.jpg" alt="" class="img-responsive">
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-9 text">
                      <h4 class="fitness-text">Fitnes Products</h4>
                      <p class="pupler-text">Lorem ipsum dolor sit
                        amet, consectetur
                      </p>
                      <h6 class="econs">£20.00;
                        <div class="star">
                          <img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img
                              src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png">
                        </div>
                      </h6>
                    </div>

                  </div>
                </div>
                <div class="Populas">
                  <div class="row">
                    <div class="col-md-4 col-sm-4  col-xs-6 image">
                      <div class="pupler-image">
                        <img src="@/assets/images/blog/bloge-2jpg.jpg" alt="" class="img-responsive">
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-9 text">
                      <h4 class="fitness-text">Dumbbells</h4>
                      <p class="pupler-text">Lorem ipsum dolor sit
                        amet, consectetur
                      </p>
                      <h6 class="econs">£20.00;
                        <div class="star">
                          <img src="@/assets/images/blog/yellow-star.png">
                            <img src="@/assets/images/blog/yellow-star.png">
                            <img src="@/assets/images/blog/yellow-star.png">
                            <img src="@/assets/images/blog/yellow-star.png">
                              <img src="@/assets/images/blog/yellow-star.png">
                              <img src="@/assets/images/blog/yellow-star.png">
                        </div>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="Populas">
                  <div class="row">
                    <div class="col-md-4 col-sm-4  col-xs-6 image">
                      <div class="pupler-image">
                        <img src="@/assets/images/blog/bloge-5.jpg" alt="" class="img-responsive">
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-9 text">
                      <h4 class="fitness-text">Leather Rope</h4>
                      <p class="pupler-text">Lorem ipsum dolor sit
                        amet, consectetur
                      </p>
                      <h6 class="econs">£20.00;
                        <div class="star">
                          <img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img
                              src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png">
                        </div>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="Populas">
                  <div class="row">
                    <div class="col-md-4 col-sm-4  col-xs-6 image">
                      <div class="pupler-image">
                        <img src="@/assets/images/blog/bloge-3.jpg" alt="" class="img-responsive">
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-9 text">
                      <h4 class="fitness-text">Fitnes Tool</h4>
                      <p class="pupler-text">Lorem ipsum dolor sit
                        amet, consectetur
                      </p>
                      <h6 class="econs">£20.00;
                        <div class="star">
                          <img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img
                              src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png">
                        </div>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="Populas">
                  <div class="row">
                    <div class="col-md-4 col-sm-4  col-xs-6 image">
                      <div class="pupler-image">
                        <img src="@/assets/images/blog/bloge-4.jpg" alt="" class="img-responsive">
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-9 text">
                      <h4 class="fitness-text">Rumble Roller</h4>
                      <p class="pupler-text">Lorem ipsum dolor sit
                        amet, consectetur
                      </p>
                      <h6 class="econs">£20.00;
                        <div class="star">
                          <img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img
                              src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png"><img src="@/assets/images/blog/yellow-star.png">
                        </div>
                      </h6>
                    </div>
                  </div>
                </div>
              </aside>
            </div>



            <!--=========Shop Right Start============-->
            <div class="main2-shoping">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tz-newsletter tz-newsletter-type-1">
      <div class="container">
        <div class="row">
          <div class="newsletter-left col-md-6">
            <div class="news-icon">
              <i class="fa fa-paper-plane"></i>
            </div>
            <div class="news-content">
              <h3 class="new-title">
                Subscribe our newsletter
              </h3>
              <p>Register now! We will send you best offers for your trip. </p>
            </div>
          </div>
          <div class="newsletter-right col-md-6">
            <form class="newsletter">
              <div class="tnp-field tnp-field-email"><label>email</label>
                <input class="tnp-email" type="email" name="ne" value="" placeholder="Enter Your Email" required="">
                <button type="submit" class="btn btn-success sim-button button8 btn-effect "><span>Submit</span></button>
              </div>
              <div class="tnp-field tnp-field-button">

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import '@/assets/css/icofont.css'
  export default {
    name: 'Shop'
  }
</script>

<style>
</style>
