<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Power Yoga Classes</h1>
          <div class="breadcrumb">
            <ul>
             
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li class="active"><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item " style="color: white;font-size: medium;">Power Yoga Classes
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
                  <li class="activeCat"><router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">
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
            <div class="col-sm-12 col-md-9 main-sarvices power_yoga">
              <div class="imagesss">
                <div class="image-opacity-on-hover image-zoom-on-hover">
                  <img src="@/assets/images/power-yoga/power-yoga1.jpg" alt="Image 1" class="img-responsive">
                </div>
              </div>
              <div class="class-Description">
                <h3>课程描述</h3>
                <p>力量型瑜伽是一种强有力、健康bai的串联体位式瑜伽，对人体是有一定好处的，通过练习力量型瑜伽能达到超强的塑造形体的效果。
深层的力量锻炼，能增强肌肉弹性，有助于增强软组织和关节的牢固。健美运动员那种发达的肌肉需要大量蛋白质作为原料 ，一般女性的日常摄入量远远不够。力量型瑜伽结合体位法与深度呼吸法，将有针对性的瑜伽动作连接在一起，连贯流畅，强调力量与柔韧性的有机结合。</p>
                <p>在中国，人们欣赏于它的巧妙体位连接，以及行云流水般一气呵成的习练方式，实际上，力量(流)瑜伽同样也极具系统性。它可以帮助提高人们的自信、耐力、意志力、肌肉力量和身体灵活性;可以帮助调整身体达到最好的状态。瑜伽可以使我们的身体更加健康;还可以改善人们的性格。
                </p>
              </div>
             <div class="row">
                <div class="col-md-12">
                  <h4 class="skill-2">技能点</h4>
                  <div class="empty-space lg-15 sm-15 xs-15"></div>
                  <div class="tt-accordeon">
                    <div class="tt-accordeon-title">新月式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>这个一个很好的训练大腿前部和腹部的力量的瑜伽姿势</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">斜板式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>这个看似“简单”的姿势实际上相当复杂，因为它可以加强全身肌肉，包括腹部，腿部，肩部和平衡，更是瑜伽力量训练极好体式！</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">船式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>对于经常坐在办公室的人来说，这是一个很好的姿势，它能很好锻炼臀部和腹部肌肉，因为需要平衡也需要启动你的核心，所以它也是很好的瑜伽力量训练体式。</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">蝗虫式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>这个体式锻炼到你所有的背部肌肉，从肩膀和脖子，到你的腰部 ，以及你的腿和手臂。</p>
                      </div>
                    </div>
                    <div class="empty-space lg-15 sm-15 xs-15"></div>
                    <div class="tt-accordeon-title">单腿下犬式</div>
                    <div class="tt-panel">
                      <div class="simple-text">
                        <p>这是简单的下犬式变体。通过抬起一条腿，可以使站立（或平衡）腿更加强健。从瑜伽力量训练姿势来看，你肯定会感觉到站立腿上大腿内侧有紧绷感</p>
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
    name: 'Power-yoga'
  }
</script>

<style>
</style>
