<template>
  <div id="app" class="antialiased bg-blue-100 h-screen w-full">
    <NavBar/>
    <div >
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
#app {
  font-family: 'Nanum Gothic', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>

<script>
import NavBar from './components/layouts/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
