<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style>
  *{margin:0;padding:0;}
  #app {
  width:100%;
  height:100%;
  overflow: hidden;
}
  body{
    font-family:"Helvetica Neue",Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
  }
.content{
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 0px;
  right: 0;
  top: 70px;
  bottom: 0;
  width: auto;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
