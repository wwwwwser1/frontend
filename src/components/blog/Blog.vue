<template>
  <section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Blog</h1>
          <div class="breadcrumb">
            <ul> 
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/blog'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Blog 
                  </router-link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To CATEGORIES=================-->
    <div class="blog_left_sidebar blog_right01 cellpadding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">
                <div class="portfolioHover">
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img src="@/assets/images/Bloge-image/Bloge-img.jpg" alt="" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>06</h5>
                    <span>Aug</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <h3 class="h3 blog-title">Aenean auctor felis quis neque feugiat, lacinia lacinia elit malesuada.</h3>
                  <div class="blogInfo">
                    <p><i class="fa fa-user"></i> By: Admin</p>
                    <p><i class="fa fa-tag"></i>Fitness Workout</p>
                    <p><i class="fa fa-comments-o"></i> Comments: <span> 5</span></p>
                  </div>
                  <div class="blog-content">
                    <p class="bloge-text">A wonderful serenity has taken possession of my entire soul, like these sweet
                      mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence
                      in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                      so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I
                      should be incapable of drawing a single...<a href="#"><span>Read More</span></a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">
                <div class="portfolioHover">
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img src="@/assets/images/Bloge-image/Bloge-img2.jpg" alt="image" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>06</h5>
                    <span>Aug</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <h3 class="h3 blog-title">Donec consequat mi quis erat accumsan, ac mattis tortor mattis.</h3>
                  <div class="blogInfo">
                    <p><i class="fa fa-user"></i> By: Admin</p>
                    <p><i class="fa fa-tag"></i>Uncategorized </p>
                    <p><i class="fa fa-comments-o"></i> Comments: <span> 5</span></p>
                  </div>
                  <div class="blog-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,
                      which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in
                      the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable
                      of drawing a single...<a href="#"><span>Read More</span></a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mainBlogContent">
              <div class="normall blogs completeblog">
                <div class="portfolioHover">
                  <div class="image-opacity-on-hover image-zoom-on-hover">
                    <img src="@/assets/images/Bloge-image/Bloge-img3.jpg" alt="image" class="img-responsive">
                  </div>
                  <div class="date">
                    <h5>06</h5>
                    <span>Aug</span>
                  </div>
                </div>
                <div class="blog_withoutside">
                  <h3 class="h3 blog-title">Etiam iaculis urna et nisi elementum, in venenatis est semper.</h3>
                  <div class="blogInfo">
                    <p><i class="fa fa-user"></i> By: Admin</p>
                    <p><i class="fa fa-tag"></i>Uncategorized</p>
                    <p><i class="fa fa-comments-o"></i> Comments: <span> 5</span></p>
                  </div>
                  <div class="blog-content">
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,
                      which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in
                      the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable
                      of drawing a single...<a href="#"><span>Read More</span></a></p>
                  </div>
                </div>
              </div>
              <div class="pagiNexts">
                <div class="paginationWrapper">
                  <div class="nubmerPagination">
                    <a class="numberPagi activePagi" href="#">1</a>
                    <a class="numberPagi" href="#">2</a>
                  </div>
                  <a class="pagiNext" href="#"><i class="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Blog'
  }
</script>

<style>
  
</style>
