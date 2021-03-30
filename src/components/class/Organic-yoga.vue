<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Organic Yoga Classes</h1>
          <div class="breadcrumb">
            <ul>
              
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Organic Yoga Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="orginc-yoga">
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
                  <li class="activeCat"><router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">
                  OrganicYoga<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li><router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">
                  Raw Fitness<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">
                  Body Building<i class="fa fa-angle-right" aria-hidden="true"></i></router-link></li>
                  <li ><router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices">
              <div class="imagesss">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/orginc-yoga/orginc-yoha-1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description class_description_1">
                <h3>课程描述</h3>
                <p>瑜伽，不只是一套流行或时髦的健身运动这么简单。瑜伽是一个非常古老的能量知识修炼方法，集哲学、科学和艺术于一身。瑜伽的基础建立在古印度哲学上，数千年来，心理、生理和精神上的戒律已经成为印度文化中的一个重要组成部分。古代的瑜伽信徒发展了瑜伽体系，因为他们深信通过运动身体和调控呼吸，可以控制心智和情感，以及保持健康的身体。
                </p>
                <p>瑜伽发展到了今天，已经成为世界广泛传播的一项身心锻炼修习法。从印度传至欧美、亚太、非洲等等，因为它对心理的减压以及对生理的保健等明显作用而备受推崇。同时不断演变出了各种各式的瑜伽分支方法，比如热瑜伽、哈他瑜伽、高温瑜伽、养生瑜伽等等，以及一些瑜伽管理科学。
                </p>
              </div>
              <div class="row">
                <div class="col-md-6   col-sm-6 Skill-five">
                  <h4 class="tt-title h4 gray no-desc yellow">瑜伽体式</h4>
                  <div class="empty-space lg-15 sm-15 xs-15"></div>
                  <div class="tt-accordeon">
                    <div class="tt-accordeon-title">下犬式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>半倒立体式，坐骨上提，脚后跟不一定会落地哦，脊柱延展，不要塌肩</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">斜板支撑</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>最基础的瑜伽体能强化体式，加强核心稳定性，为后面的高级体式做好坚实基础。</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">三角伸展式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>深度不重要，侧面伸展才是关键，控制两个膝盖不要超伸哦</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">树式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>单腿平衡练习，对支撑腿有很好的强化力量的作用，眼睛关注某个定点维持稳定。</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">战士一式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>加强双腿力量的同时拉伸后腿前侧和髋部前侧肌群，为后弯做好基础。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6  col-sm-6 Skill-five">
                  <div class="empty-space xs-30 "></div>
                  <div class="benefits">
                    <h4 class="tt-titles">瑜伽益处</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <img src="@/assets/images/orginc-yoga/benifits-yoga.jpg" alt="Image 1" class="img-responsive">
                    <div class="check-texts ">
                      <ul>
                        <li>
                          <i class="fa fa-check-square-o"></i>练瑜伽能够提高身体的新陈代谢率，增加新陈代谢率以后，对于减肥、减脂都有很好的促进作用
                        </li>
                        <li>
                          <i class="fa fa-check-square-o"></i>经常练习瑜伽能够增强身体的活力，能够调理内分泌系统，对于女性能够充分滋养卵巢，能够促进体内内分泌腺体的分泌作用
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
</template>

<script>
  export default {
    name: 'Organic-yoga'
  }
</script>

<style>
</style>
