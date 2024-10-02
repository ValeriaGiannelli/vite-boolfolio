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
        },
        types: [],
        technologies: [],
      }
    },

    methods: {

      getApi(apiUrl, object){
        // ogni volta che faccio una chiamata metto la schermata di loading
        this.loading = true;
        axios.get(apiUrl)
              .then(result =>{
                console.log(result.data);

                // switch case
                switch(object){
                  case 'projects':
                    this.projects = result.data.projects.data;
                    this.paginator.current_page = result.data.projects.current_page;
                    this.paginator.links = result.data.projects.links;
                    break;

                  case 'technologies':
                    this.technologies = result.data.technologies;
                    break;

                  case 'types':
                    this.types = result.data.types;
                };
                // console.log(this.paginator);
                this.loading = false;
              })
      }
    },

    mounted(){
      this.getApi(store.apiUrl + 'progetti', 'projects');
      // fare più chiamate per type e technology
      this.getApi(store.apiUrl + 'linguaggi-di-programmazione', 'technologies');
      this.getApi(store.apiUrl + 'tipi-di-progetto', 'types');
    }
  }



</script>

<template>
<div>

  <!-- loading di attesa -->
  <div class="my-loader" v-if="loading">
    <Loader />
    
  </div>

  <div class="my-container-flex" v-else>
    <!-- parte progetti -->
    <div class="list-projects">
      <h2>Lista dei progetti</h2>
      <!-- lista dei progetti -->
      <ul class="list-group">
        <li class="list-group-item" v-for="project in projects" >{{project.title}}</li>
      </ul>
  
      <!-- impaginazione -->
      <div class="paginator">
        <button class="btn " v-for="(link, index) in paginator.links" :key="index" v-html="link.label" :disabled="link.active || !link.url" @click="getApi(link.url, 'projects')"></button>
    
      </div>
    </div>

    <!-- parte types e technologies -->
      <!-- parte dei type -->
      <div>
        <h2>Tipi di progetto</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="type in types">{{type.name}}</li>
        </ul>

      </div>

      <!-- parte delle technologies -->
      <div>
        <h2>Linguaggi usati</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="technology in technologies">{{technology.name}}</li>
        </ul>
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
  .my-container-flex{
    display: flex;
    gap:50px;
    margin:10px;

    // .list-projects{
    //   max-width: 400px;
    // }

    .paginator{
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        margin: 0 5px;
        padding: 5px;
      }

  }

  }

</style>
