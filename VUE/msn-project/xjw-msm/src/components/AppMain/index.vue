<template>
  <div>
    <div class="main">
      <app-link v-show=" $route.path!=='/home'"> </app-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppLink from './link.vue'
export default {
   
 components:{AppLink}


}
</script>