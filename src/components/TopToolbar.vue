<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list-item-group color="primary" mandatory>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          dense
          @click="$router.push({ path: item.route })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click.stop="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Decrypto</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TopToolbar",
  components: {},
  data: function () {
    return {
      showMenu: false,
      menuItems: [
        {
          icon: "mdi-play",
          title: "Game Page",
          route: "/game",
        },
        { icon: "mdi-plus", title: "New Game", route: "/new" },
        { icon: "mdi-information-outline", title: "About", route: "/about" },
      ],
    };
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>