import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name: 'main',
      component:() => import('components/main/Main.vue'),
      children:[
        {
          path: '/',
          name: 'index',
          component: () => import('components/index/Index.vue'),
        },
        {
          path: '/event',
          name: 'event',
          component: () => import('components/event/Event.vue'),
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('components/blog/Blog.vue'),
        },
        {
          path: '/class/',
          name: 'class',
          component: () => import('components/class/Class.vue'),
         },
        {
          path: '/class/running',
          name: 'running',
          component: () => import('components/class/Running.vue'),
        },
        {
          path: '/class/body-building',
          name: 'body-building',
          component: () => import('components/class/Body-building.vue'),
        },
        {
          path: '/class/raw-fitness',
          name: 'raw-fitness',
          component: () => import('components/class/Raw-Fitness.vue'),
        },
        {
          path: '/class/body-combact',
          name: 'body-combact',
          component: () => import('components/class/Body-combact.vue'),
        },
        {
          path: '/class/organic-yoga',
          name: 'organic-yoga',
          component: () => import('components/class/Organic-yoga.vue'),
        },
        {
          path: '/class/pilates-fitness',
          name: 'pilates-fitness',
          component: () => import('components/class/Pilates-fitness.vue'),
        },
        {
          path: '/class/power-yoga',
          name: 'power-yoga',
          component: () => import('components/class/Power-yoga.vue'),
        },
        {
          path: '/class/strength-training',
          name: 'strength-training',
          component: () => import('components/class/Strength-training.vue'),
        },
        {
          path: '/class/weight-lifting',
          name: 'weight-lifting',
          component: () => import('components/class/Weight-Lifting.vue'),
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: () => import('components/gallery/Gallery.vue'),
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('components/shop/Shop.vue'),
          children: [
            {
              path: '/',
              name: 'shop index',
              component: () => import('components/shop/shop_index.vue')
            },
            {
              path: 'aerobic_training',
              name: 'aerobic training',
              component: () => import('components/shop/Aerobic_training.vue')
            },
            {
              path: 'strength_training',
              name: 'strength training',
              component: () => import('components/shop/Strength_training.vue')
            },
            {
              path: 'fight_training',
              name: 'fight training',
              component: () => import('components/shop/Fight_training.vue')
            },
            {
              path: 'leisure_fitness',
              name: 'leisure fitness',
              component: () => import('components/shop/Leisure fitness.vue')
            },
            {
              path: 'yoga_training',
              name: 'yoga training',
              component: () => import('components/shop/yoga training.vue')
            }

          ]
        }, 
        {
          path: 'shop_cart',
          name: 'shop cart',
          component: () => import('components/shop/shop-cart.vue')
        },
        {
          path: 'check_out',
          name: 'check out',
          component: () => import('components/shop/check out.vue')
        },
        {
          path: 'shop_details',
          name: 'shop details',
          component: () => import('components/shop/shop-details.vue')
        }
      ],
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('components/login/Login.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('components/login/Register.vue'),
    }
  ]
});