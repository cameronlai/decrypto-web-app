<template>
  <v-container fluid>
    <h1>Words</h1>
    <v-row>
      <v-col v-for="word in wordList" :key="word.id">
        <v-card>
          <v-card-text class="mb-0 pb-0 text-center">{{ word.id }}</v-card-text>
          <v-divider></v-divider>
          <v-card-text class="mb-0 pb-0 text-center">
            <h1>{{ word.word }}</h1></v-card-text
          >
          <v-card-text>
            <v-text-field label="Clues" v-model="word.preClues"></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="ma-8"></v-divider>
    <h1>Clues</h1>
    <v-row>
      <v-col v-for="clue in clueList" :key="clue.id">
        <v-card>
          <v-card-text class="mb-0 pb-0 text-center">{{ clue.id }}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field v-model="clue.word"></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn depressed elevation="2" outlined>New Code</v-btn>
      </v-col>
      <v-col>
        <v-btn depressed elevation="2" outlined>Reveal Code</v-btn>
      </v-col>
    </v-row>
    <v-divider class="ma-8"></v-divider>
    <h1>Scoring</h1>
    <v-row>
      <v-col v-for="team in teamList" :key="team.name">
        <v-row>
        <h2 class="px-5 mt-5 mb-5">{{ team.name }}</h2>
        <vue-number-input
          class="mt-5 mb-5"
          v-model="team.failed"
          :min="0"
          inline
          controls
        ></vue-number-input>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueNumberInput from "@chenfengyuan/vue-number-input";

export default {
  name: "Game",
  components: {
    VueNumberInput,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      clueList: [
        { id: 1, word: "test", answer: 3 },
        { id: 2, word: "test2", answer: 2 },
        { id: 3, word: "test3", answer: 4 },
      ],
      wordList: [
        { id: 1, word: "test", prevClues: "asdf", tags: ["test, test1"] },
        { id: 2, word: "test2", prevClues: "sdfsdfsd", tags: ["test, test1"] },
        { id: 3, word: "test3", prevClues: "", tags: ["test, test1"] },
        { id: 4, word: "test3", prevClues: "", tags: ["test, test1"] },
      ],
      teamList: [
        { name: "Team Black", failed: 0 },
        { name: "Team White", failed: 0 },
      ],
    };
  },
};
</script>

<style scoped>
</style>
