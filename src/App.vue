<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-main> <router-view></router-view> </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import TopToolbar from "./components/TopToolbar.vue";

export default {
  name: "App",
  components: {
    TopToolbar,
    //  HelloWorld,
  },
};
</script>