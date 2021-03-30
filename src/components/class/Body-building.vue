<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Body Building Classes</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Body-building Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-services">
      <div class="cellpadding service_details">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-md-push-8 col-lg-3 col-lg-push-9 sub_classes">
              <aside class="blogAside">
                <ul class="categoryList normall">
                  <li><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">
                  Running Classes<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">
                  WeightLifting<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li class="activeCat"><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
                  Body Combact<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">
                  Strength Training<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
                  Power Yoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
                  Pilates Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                </ul>
              </aside>
              <div class="main-details">
                <div class="details">
                  <h3>Class Details</h3>
                  <h4>Trainer: <span>Charles Powers</span></h4>
                  <h4>Time: <span>1 Month</span></h4>
                  <h4>Price: <span>$35 / Per month</span></h4>
                  <h4>Difficulty level:<span> High</span></h4>
                  <h4>Lessons: <span>12 </span></h4>
                  <div class="book-nows">
                    <a href="appointment.html">
                      <div class="sim-button button8">
                        <span>Book Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-9 main-sarvices ">
              <div class="portfolioHover">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <div class="imagesss">
                    <img src="@/assets/images/Body Building-image/Body-Building-image.jpg" alt="Image 1" class="img-responsive">
                  </div>
                </div>
              </div>
              <div class="class-Description">
                <h3> 课程描述</h3>
                <p>健美运动作为一个运动项目，除了具有一般体育活动所共有的能锻炼身体、增进健康、增强体质的作用外，还特别能发达全身各部位的肌肉，增长体力，改善体形体态，以及陶冶美好的情操。它不仅强调"健"，而且强调"美"，把体育和美育融为一体。
                </p>
              </div>
              <div class="class-Description">
                <p>健美运动可以采用各种徒手练习，如各种徒手健美操、韵律操、形体操以及各种自抗力动作。也可采用各色各样轻重不同的运动器械来进行练习，如杠铃、哑铃、壶铃等举重器械，单杠、双杠等体操器械，以及弹簧拉力器、滑轮拉力器、橡筋带和各种特制的综合力量练习器等。
                </p>
              </div>
              <div class="inventore">
                <div class="row">
                  <div class="accusantium class_1">
                    <div class="col-sm-12 col-md-12">
                      <div class="simple">
                        <p>健美,要高bai瞻远瞩,不能急于求du成，按部就班，循序zhi渐进才能渐入佳境，否则很难达到健美的巅峰.”
                        </p>
                        <h5 class="bradom">- 孙志刚</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div class="row">
               <div class="col-sm-6 col-md-6">
                 <div class=" new-benefits five-benefits">
                   <h4>跑步的好处</h4>
                 </div>
                 <div class="check-text ">
                   <ul>
                     <li>
                       <i class="fa fa-check-square-o"></i>养成易于燃脂的好体质
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>让身材更紧致年轻
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>提高瘦身动力
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>预防疾病
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>锻炼肺活量
                     </li>
                     <li>
                       <i class="fa fa-check-square-o"></i>强健骨骼
                     </li>
                   </ul>
                 </div>
               </div>
               <div class="row">
                 <div class="col-sm-6 col-md-6">
                   <div class="benifets">
                     <img src="@/assets/images/runing-images/runing.jpg" alt="Image 1" class="img-responsive">
                   </div>
                 </div>
               </div>
             </div>
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

  </div>
</template>

<script>
  export default {
    name: 'Body-building'
  }
</script>

<style>
</style>
