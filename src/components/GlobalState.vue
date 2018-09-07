<template>
<div>
    <counter></counter>
    <counter></counter>
    <button @click="inc">increment</button>
</div>
</template>

<script>

const globalState = {
    count: 0
}

const Counter = {
  data(){
      return globalState;
  },  
  // template: '<div>{{count}}</div>'  
  render: function(h){
      return h('div', globalState.count);
  }
}

export default {  
  components: {
    Counter
  },  
  methods: {
    inc(){
      globalState.count++;
    }
  }    
}
</script>

<style>
</style>
