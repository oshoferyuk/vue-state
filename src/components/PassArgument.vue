<template>
<div>    
    <counter :count="count"></counter>
    <counter :count="count"></counter>
    <button @click="inc">increment</button>
</div>
</template>

<script>

const Counter = {
  props: ['count'],        
    //template: '<div>{{count}}</div>'  
    render: function(h){ return h('div', this.count) }
}

export default {  
  components: {
    Counter
  },
  data(){
      return {count: 0}
  },
  methods: {
    inc(){
      this.count++;
    }
  }    
}
</script>

<style>
</style>
