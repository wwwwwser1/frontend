<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Running Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Running Classes
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
                  <li class="activeCat"><router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">
                  Running Classes<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">
                  WeightLifting<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
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
              <div class="imagesss">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/runing-images/runing-imagess.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description Description-5">
                <h3> 课程描述</h3>
                <p>动作要领:听到“跑步”的预令时，两手迅速握拳（四指蜷握，拇指贴于食指第一关节和中指第二关节），提到腰际，约与腰带同高，拳心向内，肘部稍向里合。听到“走”的动令后，
，上体微向前倾，两腿微弯，同时，左脚利用右脚掌的蹬力跃出约85厘米，前脚掌先着地，身体重心前移，右脚照此法动作；上体保持正直，两臂前后自然摆动，向前摆臂时大臂略直，肘部贴于腰际，小臂略平，稍向里合，两拳内侧各距衣扣线约10厘米；向后摆臂时，拳贴于腰际。行进速度每分钟170-180步。
听到“立定”的口令，再跑两步，然后左脚向前大半步（两拳收于腰际，停止摆动）着地，右脚靠拢左脚，同时将手放下，成立正姿势。
跑步的第一步一定要跃出去，跑步过程中要根据实际情况调整落脚姿态（前掌跑、全掌跑以及后掌跑）；立定时，要注意靠腿和放臂的一致性。
跑步是一门学问，最科学的锻炼方法才能达到最好的效果。
                </p>
              </div>
              
              <div class="row">
                <div class="col-sm-6 col-md-6">
                  <div class="benifets new-benefits five-benefits">
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
              <div class="f-buton">
                <div class="row">
                  <div class="col-md-12 col-sm-12 five-haadings">
                    <div class="contact_us2_form House_Renovation_form roofing_form">
                      <h4 class="tt-title h4 yellow text-left ">Leave A Comment</h4>
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
    name: 'Running'
  }
</script>

<style>
</style>
