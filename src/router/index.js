import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewCaseStudy from '../views/ViewCaseStudy.vue';
import ViewJwt from '../views/ViewJwt.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CaseStudy',
    component: ViewCaseStudy,
  },
  {
    path: '/Jwt',
    name: 'Jwt',
    component: ViewJwt,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
