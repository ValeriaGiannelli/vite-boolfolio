<script>
  import axios from 'axios';
  import { store } from '../store.js';


  export default {
    name: 'PostsType',

    data(){
      return{
        projects: [],
        type: '',
      }
    },

    methods: {
      getApi(slug){
        axios.get(store.apiUrl + 'progetti-per-tipo/' + slug)
          .then(result =>{
            // console.log(result.data.type);
            if(result.data.success){
              this.projects = result.data.type.projects;
              this.type = result.data.type.name;
            } else {
              this.$router.push({name: 'Error404'});
            }
            
          })
      }
    },

    mounted(){
      const slug = this.$route.params.slug;
      this.getApi(slug);
    }

  }
</script>

<template>
   <h1>Elenco post per categoria: {{type}}</h1>
   <ul>
    <li v-for="project in projects">
     <router-link :to="{name:'projectDetails', params: {slug: project.slug}}">{{ project.title }}</router-link> 
    </li>
   </ul>
</template>