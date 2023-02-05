import Vue from "vue";
import VueRouter from "vue-router";

import List from "../pages/List.vue";
import Details from "../pages/Details.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: List },
  { path: "/details/:name", component: Details }
];

export const router = new VueRouter({
  routes,
  mode: "history"
});
