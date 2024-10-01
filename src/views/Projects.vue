<script>
  import axios from 'axios';
  import { store } from '../store.js';
  import Loader from './partials/loader.vue';

  export default {
    name: 'projects',

    components:{
      Loader,
    },

    data(){
      return {
        loading: true,
        projects: [],
        paginator: {
          current_page: 1,
          links:[]
        }
      }
    },

    methods: {

      getApi(apiUrl){
        // ogni volta che faccio una chiamata metto la schermata di loading
        this.loading = true;
        axios.get(apiUrl)
              .then(result =>{
                // console.log(result.data);
                this.projects = result.data.projects.data;
                this.paginator.current_page = result.data.projects.current_page;
                this.paginator.links = result.data.projects.links;
                // console.log(this.paginator);
                this.loading = false;
              })
      }
    },

    mounted(){
      this.getApi(store.apiUrl + 'progetti');
    }
  }



</script>

<template>
<div>
  <h1>I progetti</h1>

  <!-- loading di attesa -->
  <div class="my-loader" v-if="loading">
    <Loader />
    
  </div>

  <div v-else>
    <!-- lista dei progetti -->
    <ul class="list-group">
      <li class="list-group-item" v-for="project in projects" >{{project.title}}</li>
    </ul>

    <!-- impaginazione -->
    <div class="paginator">
      <button class="btn " v-for="(link, index) in paginator.links" :key="index" v-html="link.label" :disabled="link.active || !link.url" @click="getApi(link.url)"></button>
  
    </div>
  </div>


</div>

</template>

<style lang="scss" scoped>


.my-loader {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}


  .paginator{
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      margin: 0 5px;
      padding: 5px;
    }
  }

</style>
