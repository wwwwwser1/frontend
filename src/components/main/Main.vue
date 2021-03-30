<template>
  <section class="aui-flexView">
    <header class="header1 header-2" >
      <div class="tt-header pull-logo" style="background-color: black;opacity: 0.75;">
        <div class="container">
          <div class="top-inner clearfix" >
            <div class="logo pull-left main-logo ">
                <img src="../../assets/images/logo-1.png" class="img-responsive green" alt="" title="logo">
            </div>
          </div>
          <div class="toggle-block">
            <div class="toggle-block-container">
              <nav class="main-nav clearfix">
                <ul>
                  <li >
                    <router-link :to="{name:'index'}" exact class="aui-tabBar-item ">
                      <span class="par">首页</span>
                    </router-link>
                  </li>
                 
                  <li class="parent dropdown" role="presentation">
                    <router-link :to="{name:'class'}" exact class="aui-tabBar-item dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                      <span class="par">课程<i class="menu-toggle fa fa-angle-down"></i></span>
                     </router-link>
                    <ul class="dropdown-menu">    
                      <li><router-link :to="{name:'running'}" tag="a" exact class="aui-tabBar-item "><span>跑步课程</span></router-link></li>
                      <li><router-link :to="{name:'weight-lifting'}" tag="a" exact class="aui-tabBar-item "><span>举重课程</span></router-link></li>
                      <li><router-link :to="{name:'organic-yoga'}" tag="a" exact class="aui-tabBar-item "><span>有机瑜伽课程</span></router-link></li>
                      <li><router-link :to="{name:'body-building'}" tag="a" exact class="aui-tabBar-item "><span>健美运动课程</span></router-link></li>
                      <li><router-link :to="{name:'raw-fitness'}" tag="a" exact class="aui-tabBar-item "><span>原始健身课程</span></router-link></li>
                      <li><router-link :to="{name:'body-combact'}" tag="a" exact class="aui-tabBar-item "><span>力量对抗课程</span></router-link></li>
                      <li><router-link :to="{name:'strength-training'}" tag="a" exact class="aui-tabBar-item "><span>力量训练课程</span></router-link></li>
                      <li><router-link :to="{name:'power-yoga'}" tag="a" exact class="aui-tabBar-item "><span>力量瑜伽</span></router-link></li>
                      <li><router-link :to="{name:'pilates-fitness'}" tag="a" exact class="aui-tabBar-item "><span>普拉提健身</span></router-link></li>
                    </ul>
                  </li>
                  <li class="parent dropdown" role="presentation">
                    <router-link :to="{name:'event'}" exact class="aui-tabBar-item  dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                      <span class="par">消息<i class="menu-toggle fa fa-angle-down"></i></span>
                    </router-link>
                    <ul class="dropdown-menu">
                      <li><a href="event.html"><span>Events 2 Columns</span></a></li>
                      <li><a href="events-details.html"><span>Event Details</span></a></li>
                    </ul>
                    
                  </li>
                  <li class="parent">
                    <router-link :to="{name:'blog'}" exact class="aui-tabBar-item ">
                    <span class="par">博客</span>
                    </router-link>
                  </li>
                  
                  <li class="parent">
                    <router-link :to="{name:'shop index'}" exact class="aui-tabBar-item   dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                      <span class="par">商场<i class="menu-toggle fa fa-angle-down"></i></span>
                    </router-link>
                    <ul class="dropdown-menu">
                      <li><router-link :to="{name:'shop cart'}" tag="a" exact class="aui-tabBar-item "><span>购物车</span></router-link></li>
                      <li><router-link :to="{name:'check out'}" tag="a" exact class="aui-tabBar-item "><span>结算</span></router-link></li>
                    </ul>
                  </li>
                  <li class="parent">
                    <router-link :to="{name:'gallery'}" exact class="aui-tabBar-item ">
                    <span class="par">展示厅</span>
                    </router-link>
                  </li>
                  <li class="parent">
                    <router-link :to="{name:'register'}" exact class="aui-tabBar-item ">
                    <span class="par">登录</span>
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="aui-scrollView">
      <!-- 这是主体内容 -->
      <!-- 加载Main子路由的 -->
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style>
  .par {
    color: white;
    font-size: 20px;
    margin-left: 35px;
  }
</style>
