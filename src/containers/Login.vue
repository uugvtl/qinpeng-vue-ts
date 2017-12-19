<template>
  <div>
    <span v-html="greet"></span>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class extends Vue {
    public msg:string = 'Welcome to Your Vue.js App'

    get greet () {
      return 'greeting: ' + this.msg
    }

  }

</script>

<style scoped>

</style>
