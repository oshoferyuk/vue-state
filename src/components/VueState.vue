
<template>
<div>
    <counter></counter>
    <counter></counter>
    <button @click="inc">increment</button>
</div>
</template>

<script>
import Vue from 'vue';

//could be domain specific, in this sence similar to mobx
const globalStore = new Vue({
    data:{
        count: 0
    },
    methods: { // mutation
        inc(){            
            this.count++;
        }
    }
})

const Counter = {
    render: h => h('div', globalStore.count)
}

export default {  
  components: {
    Counter
  },  
  methods: {
    inc(){
      globalStore.inc();
    }
  }    
}
</script>

<style>
</style>
