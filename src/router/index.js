import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Auth from "@/views/Auth";

import AuthComponentLogin from "@/components/AuthComponent/components/AuthComponentLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: { name: "MainComponentCard" },
    children: [
      {
        path: "add-post",
        name: "MainComponentAddPost",
        component: () =>
          import("@/components/MainComponent/components/MainComponentAddPost")
      },
      {
        path: "/list",
        name: "MainComponentCard",
        component: () =>
          import("@/components/MainComponent/components/MainComponentCard")
      }
    ]
  },
  {
    path: "/edit?postid=:id",
    name: "MainComponentEdit",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/components/MainComponent/components/MainComponentEdit"
      )
  },
  {
    path: "/",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "/auth",
        name: "AuthComponentLogin",
        component: AuthComponentLogin
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
