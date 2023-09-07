<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h2> app.vue </h2>
  <hr>
  <router-view/>
</template>

<style lang="scss">
@import "bootstrap";

body{
  padding: 100px;
  // text-align: center;
}
</style>
