<template>
  <div class="gif_bg">
    <img v-bind:src="imgUrl"/>
  </div>
</template>

<script>
import homeGif from '../assets/homeImg.gif'

export default {
  name: 'Home',
  data () {
    return {
      imgUrl: homeGif
    }
  }

}
</script>

<style scoped>
  .gif_bg{
    background-color: #FBFEFE;
    text-align: center;
  }

</style>
