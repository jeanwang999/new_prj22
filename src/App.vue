<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'我新增的頁面'}" class="nav-link">NewPage</router-link>        </li>
        <!-- <li class="nav-item" >
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
  
<div class="container">
  <hr>
  <router-view/>
  <hr>
</div>
  <!-- <p>env</p>
  {{ name }} -->
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
  // padding: 0  10%;
  // text-align: center;
}
</style>
