<template>
  <div class="app"><noteapp /></div>
</template>

<script>
import noteapp from "./components/noteapp.vue";

export default {
  name: "App",
  components: {
    noteapp,
  },
  data() {
    return {
      chores: [],
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");
body {
  margin: 0px;
  background: #40406c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343463;
}
</style>
