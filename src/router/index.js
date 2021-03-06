import Vue from "vue";
import Router from "vue-router";
import Game from "../components/Game";
import NewGame from "../components/NewGame";
import About from "../components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home Page",
      component: NewGame,
    },
    {
      path: "/game",
      name: "Game Page",
      component: Game,
    },
    {
      path: "/new",
      name: "New Game",
      component: NewGame,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});
