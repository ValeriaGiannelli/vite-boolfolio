<script>
  import axios from 'axios';
  import { store } from '../store.js';


  export default {
    name: 'ProjectsTechnology',

    data(){
      return{
        projects: [],
        technology: '',
      }
    },

    methods: {
      getApi(slug){
        axios.get(store.apiUrl + 'progetti-per-tecnologia/' + slug)
          .then(result =>{
            // console.log(result.data);
            if(result.data.success){
              this.projects = result.data.technology.projects;
              this.technology = result.data.technology.name;
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
   <h1>Elenco post per categoria: {{technology}}</h1>
   <ul class="list-group">
    <li class="list-group-item" v-for="project in projects">
     <router-link :to="{name:'projectDetails', params: {slug: project.slug}}">{{ project.title }}</router-link> 
    </li>
   </ul>
</template>