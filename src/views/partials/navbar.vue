<script>
export default{
    name: 'Navbar',
}

</script>


<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
        </li>

        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Progetti</a> -->
          <router-link :to="{name:'projects'}" class="nav-link">Progetti</router-link>
        </li>

        <!-- contatti -->
        <li class="nav-item">
          <router-link :to="{name:'contacts'}" class="nav-link">Contatti</router-link>
        </li>

      </ul>

    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped>


</style>
