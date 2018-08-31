<template>
<div id="index">
  <nav-menu></nav-menu>
  <div class="content">
    <transition name="move" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>

import NavMenu from '@/views/NavMenu'

export default {
  name: 'Index',
  components: {
    NavMenu
  }
}
</script>

<style scoped>
  #index{
    background: white;
  }
</style>
