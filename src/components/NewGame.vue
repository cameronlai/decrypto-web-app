<template>
  <v-container fluid>
    <v-row>
      <v-card class="ma-5 pa-5">
        <v-container fluid>
          <h1>Start New Game</h1>
          <v-row>
            <v-radio-group v-model="teamSelection" column>
              <v-radio label="Team Black" value="black"></v-radio>
              <v-radio label="Team White" value="white"></v-radio>
            </v-radio-group>
          </v-row>
          <v-row>
            <v-btn depressed elevation="2" outlined> Start New Game </v-btn>
          </v-row>
          <v-row> </v-row>
        </v-container>
      </v-card>
    </v-row>
    <v-row>
      <v-card class="ma-5 pa-5">
        To ask your friend to join a game, ask your friend to share the game
        link with you.</v-card
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  props: {},
  data: function () {
    return {
      teamSelection: "black",
    };
  },
  method: {},
};
</script>

<style scoped>
</style>
