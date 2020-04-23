import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PaginaError404 from "../components/error/PaginaError404.vue";
import PaginaLogin from "../components/login/PaginaLogin.vue";
import PaginaInicio from "../components/inicio/PaginaInicio.vue"
import Bienvenido from "../components/inicio/Bienvenido.vue"
import axios from "axios"
const URL = "http://pointsale.boxcode.com.mx/"


const routes = [
  {
    path: "*",
    component: PaginaError404,
  },
  {
    path: "/login",
    component: PaginaLogin,
    name: "login",
  },
  {
    path: "/inicio",
    component: PaginaInicio,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: Bienvenido
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("blog_token");
    axios.get(URL + "api/user/vtoken")
      .then(() => {
        next()
      })
      .catch(() => {

        router.replace("/login");
      });

  } else {
    next();
  }
});

export default router;
