<template>
<counter></counter>
</template>

<script>

const Counter = {  
  render: function(h){
      return h('div', 'test');
  }
}

function app({comp, model, actions}){
    return {
        name: comp,
        components: {'counter': Counter},
        data() {
            return model;
        },
        render: (h) => h('div', {attrs:{}},
    [
        model.count, ' ',
        h('button', { on: {click: actions.inc}}, '+'),
        h('button', { on: {click: actions.dec}}, '-'),
    ])
    }
}

export default app({
    component: Counter, 
    model: {
        count: 0
    },
    actions:{
        inc: ({ count }) => ({count: count + 1}),
        dec: ({ count }) => ({count: count - 1})
    },  
    view: (h, model, actions) => h('div', {attrs:{}},
    [
        model.count, ' ',
        h('button', { on: {click: actions.inc}}, '+'),
        h('button', { on: {click: actions.dec}}, '-'),
    ])

})
</script>

<style>
</style>
