<template>
  <div id="app">
    <header><h1>My Book Store</h1></header>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
html,body{
  margin:0px;
}
hr{
  color:gainsboro;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header{
  margin-top:0px;
  text-align: center;
  color:gray;
}
header h1{
  font-size: 4em;
}
</style>
