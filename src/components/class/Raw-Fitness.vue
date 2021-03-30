<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Raw Fitness Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Raw Fitness Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-detailsssss">
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
                  <li ><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li class="activeCat"><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
                  Body Combact<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">
                  Strength Training<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
                  Power Yoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices">
              <div class="main-fitness">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-xs-6">
                    <div class="raw-fitnes main-image">
                      <div class="image-opacity-on-hover image-zoom-on-hover">
                        <img src="@/assets/images/raw-fitness/row-fast.jpg" alt="Image 1" class="img-responsive">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-xs-6">
                    <div class="raw-fitnes main-image">
                      <div class="image-opacity-on-hover image-zoom-on-hover">
                        <img src="@/assets/images/raw-fitness/row-fast-2.jpg" alt="Image 1" class="img-responsive">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="class-Description Description-9">
                <h3>课程描述</h3>
                <p>健身运动可以采用各种徒手练习，如各种徒手健美操、韵律操、形体操以及各种自抗力动作。也可以采用各种不同的运动器械进行各种练习，如哑铃、杠铃、壶铃等举重器械，单杠、双杠、绳、杆等体操器械，以及弹簧拉力器、滑轮拉力器、橡筋带和各种特制的综合力量练习架等力量训练器械，还有功率自行车、台阶器、平跑机、划船器等有氧训练器材。
健身运动简单易行、适当运动，能有效地增强人们的体质，增进人们的健康，发达全身肌力，增强力量，提高生产劳动效率；还能改善人们的体型、体态、陶冶人们的美好情操，所以深受人民大众的喜爱，特别是文化知识水平较高的人们。在开展全民健身运动的今天，健身运动有很强的吸引力，它可以使瘦弱者变强壮，使肥胖者变结实，使少儿健康成长，使老年人健康、长寿。
                </p>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="simple">
                    <p>运动太多和太少，同样的损伤体力；饮食过多与过少，同样的损伤健康；唯有适度可以产生、增进、保持体力和健康
                    </p>
                    <h5 class="bradom">- 亚里士多德</h5>
                  </div>
                </div>
              </div>
              <div class="btn-3">
                <div class="row">
                  <div class="col-md-12 col-sm-12 leave-11">
                    <div class="contact_us2_form House_Renovation_form roofing_form">
                      <h4 class="tt-title h4 yellow text-left">Leave A Comment</h4>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <form action="contact_process.php" method="post" id="leaveComment">
                        <div class="form-group top_bottom">
                          <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group top_bottom">
                              <input type="email" class="form-control" id="email" name="email" placeholder="Email"
                                required>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group top_bottom">
                              <input type="text" class="form-control" id="number" name="number" placeholder="Phone"
                                required>
                            </div>
                          </div>
                        </div>
                        <div class="form-group Message top_bottom">
                          <textarea class="form-control" id="comment" name="comment" placeholder="Write Comment"></textarea>

                        </div>
                        <button type="submit" name="leaveComment" id="leaveComment" class="btn sim-button button8">
                          <span>Leave A Comment</span>
                        </button>
                      </form>
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
    name: 'Raw-Fitness'
  }
</script>

<style>
</style>
