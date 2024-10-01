<script>

  import { Navbar } from './views/partials/navbar.vue';

  export default{
    components: {
      Navbar,
    }
  }

</script>

<template>

<div>
  <Navbar />
  <router-view></router-view>
</div>

</template>

<style lang="scss" scoped>

</style>
