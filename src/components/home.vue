<template>
  <div class="hello">
    <h2>Hello!</h2>
    <h4>This is Snir's bookstore</h4>
    <h5>(if you dont know where to start , we suggest you enter the <router-link to="/booklist">BookList</router-link>)</h5>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h2{
  font-size: 5em;
  margin-bottom: 0px;
  color: #42b983;
  margin-top:10%;
}

a {
  text-decoration:none;
  color: #42b983;
}
</style>
