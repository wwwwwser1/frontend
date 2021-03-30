<template>
  <section>
    <div class="banner">
      <div class="container">
        <div class="row">
          <h1 class="banner_title">Classes</h1>
          <div class="breadcrumb">
            <ul>
              <li> <router-link :to="{path:'/'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Home
                  </router-link></li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
              <li><router-link :to="{path:'/class'}" exact class="aui-tabBar-item " style="color: orangered;font-size: medium;">Classes 
                  </router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--================ Our banner Section end =================-->
    <!--================ runing class Section start =================-->
    <div class="main-classes classes_1 cellpadding">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes Running-2">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images.jpg" alt="Image 1" class="img-responsive">
              </div>
              <h4 class="runn">跑步课程</h4>
              <p>跑步是一项有氧运动（跑步速度会影响心率，但一般而言认为跑步的心率应控制在有氧心率区间内），通过跑步，我们能提高肌力，令肌肉量适当地恢复正常的水平，同时提高体内的基础代谢水平，加速脂肪的燃烧，养成易瘦体质 </p>
             <router-link :to="{path:'/class/running'}" exact class="aui-tabBar-item ">更多
               </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-1.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">杠铃操课程</h4>
              <p>杠铃操是杠铃和健身操进行组合的一种运动。可调节杠铃的重量适合不同年龄、性别和体质的人士。
杠铃操是一项比较快速的瘦身运动，它是把杠铃和健身操进行了组合，可以塑造魅力体型，可以使你身心受益的运动。
</p>
              
              <router-link :to="{path:'/class/weight-lifting'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-2.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">有机瑜伽课程</h4>
              <p>瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式，包括调身的体位法、调息的呼吸法、调心的冥想法等，以达至身心的合一。</p>
              <router-link :to="{path:'/class/organic-yoga'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>
          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-3.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">原始健身课程</h4>
              <p>健身运动是一项通过徒手或利用各种器械，运用专门的动作方式和方法进行锻炼，以发达肌肉、增长体力、改善形体和陶冶情操为目的的运动项目。 </p>
              <router-link :to="{path:'/class/raw-fitness'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-4.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">健美运动课程</h4>
              <p>力量训练是指一种进行多次，多组有节奏的动作，来帮助你提高肌肉力量，增加肌肉围度。力量训练是以无氧训练为基础，可以帮助你提高上肢力量、腰腹部力量和下肢力量，力量训练的类型有很多，可以徒手或负重训练</p>
              <router-link :to="{path:'/class/body-building'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-5.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">力量对抗课程</h4>
              <p>BODY COMBAT 源自一系列搏击格斗动作，将中国武术、泰拳、西洋拳击、空手道、跆拳道等结合在一起，在注重锻炼耐力的同时提高全身的力量和灵活性，进行全面的体能调节，消耗大量卡路里，修整肌肉轮廓，并能自我防卫。</p>
              <router-link :to="{path:'/class/body-combact'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>

          </div>


          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-11.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">力量训练课程</h4>
              <p>力量训练是指一种进行多次，多组有节奏的动作，来帮助你提高肌肉力量，增加肌肉围度。力量训练是以无氧训练为基础，可以帮助你提高上肢力量、腰腹部力量和下肢力量，力量训练的类型有很多，可以徒手或负重训练。</p>
              <router-link :to="{path:'/class/strength-training'}" exact class="aui-tabBar-item ">更多
                </router-link>
            </div>

          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-12.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">力量瑜伽</h4>
              <p>力量瑜伽即为POWER瑜伽，是一种强有力、健康的串联体位式瑜伽。任何人都可以学习力量瑜伽。学习力量瑜伽能够达到减肥、提高身体力量并提高灵活性的目的，可以帮助我们在生理功能、意识、人际交往，以及精神层面等各个方面都得到提升。 </p>
                <router-link :to="{path:'/class/power-yoga'}" exact class="aui-tabBar-item ">更多
                  </router-link>
            </div>

          </div>

          <div class="col-sm-4 col-md-4 col-xs-6">
            <div class="Running-Classes">
              <div class="image image-opacity-on-hover image-zoom-on-hover">
                <img src="@/assets/images/classes-images/classs-images-13jpg.jpg" alt="Image 1" class="img-responsive">
              </div>

              <h4 class="runn">普拉提健身</h4>
              <p>普拉提首先是一种运动。它主要是锻炼人体深层的小肌肉群，维持和改善外观正常活动姿势、达到身体平衡、创展躯干和肢体的活动范围和活动能力、强调对核心肌群的控制、加强人脑对肢体及骨骼肌肉组织的神经感应及支配，再配合正确的呼吸方法所进行的一项全身协调运动</p>
             <router-link :to="{path:'/class/pilates-fitness'}" exact class="aui-tabBar-item ">更多
               </router-link>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!--================ Our banner Section end =================-->
  
  </section>
</template>

<script>
  export default {
    name: 'Class'
  }
</script>

<style>
</style>
