<script>
  import axios from 'axios';
  import { store } from '../store.js'

  export default {
    name: 'projects',

    data(){
      return {
        projects: [],
        paginator: {
          current_page: 1,
          links:[]
        }
      }
    },

    methods: {

      getApi(apiUrl){
        axios.get(apiUrl)
              .then(result =>{
                console.log(result.data);
                this.projects = result.data.projects.data;
                this.paginator.current_page = result.data.projects.current_page;
                this.paginator.links = result.data.projects.links;
                console.log(this.paginator);
              })
      }
    },

    mounted(){
      this.getApi(store.apiUrl + 'progetti');
    }
  }



</script>

<template>
<div class="my-container-project">
  <h1>I progetti</h1>
  <ul class="list-group">
    <li class="list-group-item" v-for="project in projects" >{{project.title}}</li>
  </ul>

  <div class="paginator">
    <button class="btn " v-for="(link, index) in paginator.links" :key="index" v-html="link.label" :disabled="link.active" @click="getApi(link.url)"></button>

  </div>

</div>

</template>

<style lang="scss" scoped>
.my-container-project{
  height: 100%;
  width: 100%;
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
