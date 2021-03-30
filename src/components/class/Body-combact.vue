<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Body Combact Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Body Combact Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="main-services sagittis-2">
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
                    <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                    Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                    <li class="activeCat"><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices benifits_01">
              <div class="imagest">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/Body Combact-image/Body-Combact-image.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description">
                <h3>课程描述</h3>
                <p>BOOY COMBAT不仅动作节奏性非常强，而且配有背景音乐，且所选用的音乐都是国际流行乐坛的原版原唱。让锻炼者在锻炼时仿佛置身于一场精彩的音乐会。
它的套路分十节，本着先慢后快，先局部后整体，先简单后复杂的原则展开训练。因此，参训者无需具备武术或者跆拳道等的基础就能在进步中获得健康。精心设计的动作套路配以动感的音乐，将带给您前所未有的体能与精神的挑战；让您随心所欲地进行体能训练，体会激情、力量和气势，而且越投入您就越兴奋。</p>
              </div>
             
              <div class="typesetting">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="tt-title h4 gray no-desc yellow">技术要领</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon">
                      <div class="tt-accordeon-title">后蹬腿</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>支撑腿伸直或者微屈，另一侧腿以脚跟发力，尽量向身体的反方向伸直。这个动作中也要求重心偏移，重心放得越低，腿蹬得越高。</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">腾空蹬跳</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>这个动作源于泰拳。它要求腾空而起到达最高点时再发力吸腿，让大腿向胸部贴近，脚尖向下。这个动作有爆发力，攻势较强，对身体的弹跳能力要求很高。</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">直拳</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>攻击点是对方的胸脯。握紧拳头，将身体的力量集于一点，注意攻击的一侧手臂的肘部不要完全伸直，用肩部带动拳直向前冲去。同时注意发力时对身体稳定性的控制。</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">侧踹</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>这个动作要求支撑腿的脚尖向外侧打开，髋关节展开，以脚跟发力踹向身体的正侧方。脚的外侧面为攻击的接触点。</p>
                        </div>
                      </div>
                      <div class="empty-space lg-15 sm-15 xs-15"></div>
                      <div class="tt-accordeon-title">侧肘击</div>
                      <div class="tt-panel">
                        <div class="simple-text">
                          <p>看似有中国武术的影子，蹲马步，手臂弯曲，从身体前侧向身体正侧方外推，肘部指向被供给方，力量完全来自手臂。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sagittis">
                    <div class="col-md-6 col-sm-6 Benefits-5">
                      <div class="empty-space xs-30"></div>
                      <div class="benefits b11">
                        <h4 class="tt-titles">益处</h4>
                        <div class="empty-space lg-15 sm-15 xs-15"></div>
                        <div class="Combact-image">
                          <img src="@/assets/images/Body Combact-image/Body-Combact-image1.jpg" alt="Image 1" class="img-responsive">
                        </div>
                        <div class="check-texts ">
                          <ul>
                            <li>
                              <i class="fa fa-check-square-o"></i>减脂塑形
                            </li>
                            <li>
                              <i class="fa fa-check-square-o"></i>改善心肺功能
                            </li>
                            <li>
                              <i class="fa fa-check-square-o"></i>提高动作的敏捷性
                            </li>
                          </ul>
                        </div>
                      </div>
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
    name: 'Body-combact'
  }
</script>

<style>
</style>
