import Router, { RouteConfig } from "vue-router";
import { MemberListPage } from "./pages/list";
import { MemberPageContainer } from "./pages/detail";

const routes: RouteConfig[] = [
  { path: "/", redirect: "/list" },
  { path: "/list", component: MemberListPage },
  { path: "/detail/:id", component: MemberPageContainer, props: true }
];

export const router = new Router({
  routes
});
