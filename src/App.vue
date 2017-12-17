<template>
  <div id="app">
    <div v-html="msg"></div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import axios from 'axios'

  @Component
  export default class extends Vue {
    msg = 'abc'

    created () {
      axios.get('/admin/list/index')
        .then(res=>{
          this.msg = res.data.msg
        })
        .catch(res=>console.log(res));
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
