
<template>
<div>
    <counter></counter>
    <counter></counter>
    <button @click="inc">increment</button>
</div>
</template>

<script>

import Vue from 'vue/dist/vue.js';


function createStore({ state, mutations }){
    return new Vue ({
        data: {state},
        methods:{
            commit(mutationType){                                
                return mutations[mutationType](this.state);
            }
        }
    })
}

const store = createStore({
    state: { count: 0},
    mutations: {
        inc(state){
            state.count++
        }
    }

})

const Counter = {  
  render: h => h('div', store.state.count)
}

export default {  
  components: {
    Counter
  },
  methods: {
    inc () {
      store.commit('inc')
    }
  }    
}
</script>

<style>
</style>
