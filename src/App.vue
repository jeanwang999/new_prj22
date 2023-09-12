<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h2> app.vue </h2>
  <hr>
  <router-view/>
  <br>
  <p>env</p>
  {{ name }}
</template>
<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_NAME,
    }
  }
}
</script>
<style lang="scss">
@import "bootstrap";

body{
  padding: 100px;
  // text-align: center;
}
</style>
