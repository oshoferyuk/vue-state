
<template>
<div>
    <counter></counter>
    <counter></counter>
    <button @click="inc">increment</button>
</div>
</template>

<script>
// import Vue from 'vue';
import Vue from 'vue/dist/vue.js';

//could be domain specific, in this sence similar to mobx
const domainStore = new Vue({
  data: {
    count: 0
  },
  methods: {
    inc () {
      this.count++
    }
  }
})

const Counter = {
  // template: '<div>{{state.count}}</div>' needs add prop to data
  render: h => h('div', domainStore.count)
}

export default {  
  components: {
    Counter
  },
  methods: {
    inc () {
      domainStore.inc()
    }
  }    
}
</script>

<style>
</style>
