<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Pilates Fitness Classes</h1>
          <div class="breadcrumb">
            <ul>
             
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Pilates Fitness Classes
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ Welcome To Class Description=================-->
    <div class="cellpadding service_details main-784">
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
                <li class="activeCat"><router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">
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
          <div class="col-sm-12 col-md-9 col-lg-9 main-sarvices">
            <div class="imagesss">
              <div class="image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/pilates-images/pilates.jpg" alt="Image 1" class="img-responsive">
              </div>
            </div>
            <div class="class-Description Description-89">
              <h3>课程描述</h3>
              <p>
普拉提
普拉提
普拉提（Pilates）把东方的柔韧和西方的刚毅二者之长合二为一，它的动作缓慢和清楚，而每个姿势都必须和呼吸相协调，所以Pilates适合任何年龄，特别是缺少运动、长时间需要接触电脑和朝九晚五的上班族的人士。伸展、拉长也是Pilates中最重要的训练之一，其特殊之处就是肌肉不会经运动后导致粗壮，通过对身体核心部位（腰部和腹部肌肉组成，包括腹横肌、腹内斜肌、腹外斜肌、腹直肌、竖脊肌）的锻炼，使脊柱变得柔软而有韧性。所以Pilates运动不但改善了身体线条，还对矫正颈部和脊髓有非常好的效果。</p>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <div class="benifets">
                  <h4>普拉提的好处</h4>
                </div>
                <div class="check-text ">
                  <ul>
                    <li>
                      <i class="fa fa-check-square-o"></i>减少疼痛和僵硬
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>提高精神和活力
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>更好的平衡性和协调力
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>在伸展呼吸中放松
                    </li>
                    <li>
                      <i class="fa fa-check-square-o"></i>让肌肉线条伸展
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="benifets">
                  <img src="@/assets/images/pilates-images/pilates-1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="btun-2">
              <div class="row">
               <div class="col-md-12 col-sm-12">
                  <div class="empty-space xs-30"></div>
                  <div class="benefits benefits-89">
                    <h4 class="tt-titless">课程技能</h4>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="image-opacity-on-hover image-zoom-on-hover">
                      <img src="@/assets/images/pilates-images/pilates-2.png" alt="Image 1" class="img-responsive">
                    </div>
                    <div class="check-texts ">
                      <ul>
                        <li>
                          <i class="fa fa-check-square-o"></i>直立普拉提
                          <p>两脚分开，与胯同宽，手臂伸直上举，手掌相对。右脚伸直，右腿上抬，与左脚成45度角。右脚沿顺时针方向划3个圆圈，这个过程胯部是平衡的。然后反向。完成后，右脚收回地面，并将右脚向右侧抬起，脚背弯曲，并沿顺逆两个方向划圆圈。左脚重复右脚动作。</p>
                        </li>
                        <li>
                          <i class="fa fa-check-square-o"></i>健身球普拉堤
                          <p>跪在地板上，身体右侧靠在一个大健身球上。伸出左脚支撑身体，右脚仍跪在原地。右手搭在球上，左臂弯曲，左肘放于脑后，扶住颈部。侧弯腰，努力用左肘去触左胯，当无法再接近时返回，共做8～12次。然后换另一侧做。</p>
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
    name: 'Pilates-fitness'
  }
</script>

<style>
</style>
