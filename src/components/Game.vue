<template>
  <v-container fluid>
    <h1>Guesses</h1>
    <v-select :items="items" label="Guess"></v-select>
    <v-row>
      <v-col v-for="guess in guessList" :key="guess.id">
        <v-card>
          <v-card-text> {{ guess.word }}</v-card-text>
          <v-card-text> {{ guess.id }} </v-card-text>
          <v-card-text>
            <v-text-field label="Guess"></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn depressed elevation="2" outlined>Reveal Code</v-btn>
      </v-col>
      <v-col>
        <v-btn depressed elevation="2" outlined>Submit Guess</v-btn>
      </v-col>
    </v-row>
    <h1>Words</h1>
    <v-row>
      <v-col v-for="word in wordList" :key="word.id">
        <v-card>
          <v-card-text> {{ word.word }}</v-card-text>
          <v-card-text> {{ word.id }}</v-card-text>
          <v-card-text>
            <button v-for="tag in word.tags" :key="tag">
              {{ tag }}
            </button>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Game",
  props: {
    msg: String,
  },
  data: function () {
    return {
      guessList: [
        { id: 1, word: "test", answer: 3 },
        { id: 2, word: "test2", answer: 2 },
        { id: 3, word: "test3", answer: 4 },
      ],
      wordList: [
        { id: 1, word: "test", tags: ["test, test1"] },
        { id: 2, word: "test2", tags: ["test, test1"] },
        { id: 3, word: "test3", tags: ["test, test1"] },
        { id: 4, word: "test3", tags: ["test, test1"] },
      ],
    };
  },
};
</script>

<style scoped>
</style>
