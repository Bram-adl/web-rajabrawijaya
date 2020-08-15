<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/adhikara">Adhikara</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/faq">FAQ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      message: 'Testing',
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
}
</style>
