<template>
  <section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Gallery</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/gallrey'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes 
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Portfolio Project 2 columns Section =================-->
    <div class="portfolio project_2columns cellpadding">
      <div class="container">
        <div class="row">
          <ul class="portfolio-sorting list-inline text-center">
            <li><a href="#" data-group="all" class="active">ALL</a></li>
            <li><a href="#" data-group="Body Building">Body Building</a></li>
            <li><a href="#" data-group="Weight Lifting">Weight Lifting</a></li>
            <li><a href="#" data-group="Fitness">Fitness</a></li>
            <li><a href="#" data-group="Yoga">Yoga</a></li>
          </ul>
          <!--end portfolio sorting -->
          <div class="portfolio-items list-unstyled" id="grid">
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Weight Lifting"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/img-1.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/img-1.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Weight Lifting</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Yoga"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/2.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/2.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Body Building</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Body Building"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/3.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/3.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Raw Fitness</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["weight-Lifting"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/4.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/4.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Strength Training</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["interiors"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/5.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/5.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Power Yoga</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Fitness"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/6.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/6.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Pilates Fitness</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Weight Lifting"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/7.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/7.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Body Combact</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6" data-groups='["Yoga"]'>
              <figure class="portfolio-item item">
                <div class="image image-opacity-on-hover image-zoom-on-hover">
                  <a href="#">
                    <img src="@/assets/images/gallery-2/8.jpg" alt="Item 1" class="img-responsive">
                  </a>
                  <div class="overlay-background">
                    <div class="inner-overlay">
                      <div class="inner-overlay-content with-icons"><a data-title="First Image" href="@/assets/images/gallery-2/8.jpg"
                          class="lightbox lens_icon">
                          <i class="fa fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <h4 class="sub-title">Organic Yoga</h4>
                  </div>
                  <!-- end .inner -->
                </div>
              </figure>
            </div>
            <!-- sizer -->
            <div class="col-md-6  col-sm-6 col-xs-6 shuffle_sizer"></div>
          </div>
          <!--end portfolio grid -->
        </div>
        <!--end row -->
        <div class="col-md-12">
          <div class="wrapper-inner-tab-backgrounds-first">
            <a href="#">
              <div class="sim-button button8 whitebtn"><span>Show More</span></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--================ End Portfolio Project 2 columns Section =================-->
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
                <input class="tnp-email" type="email" name="ne" value="" placeholder="Enter Your Email" required>
                <button type="submit" class="btn btn-success sim-button button8 btn-effect "><span>Submit</span></button>
              </div>
              <div class="tnp-field tnp-field-button">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--================ Our footer Section start=================-->

  </section>
</template>

<script>
  export default {
    name: 'Gallery'
  }
</script>

<style>
</style>
