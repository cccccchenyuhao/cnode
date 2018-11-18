<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, li {
  list-style: none;
}

a {
  color: #000;
  text-decoration: none;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

body {
  background-color: #E1E1E1;
}

.main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  position: relative;
}


</style>
