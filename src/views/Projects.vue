<script>
  import axios from 'axios';

  export default {
    name: 'projects',

    data(){
      return {
        projects: [],
      }
    },

    methods: {

      getApi(){
        axios.get('http://127.0.0.1:8000/api/progetti')
              .then(result =>{
                console.log(result.data.projects.data);
                this.projects = result.data.projects.data;
              })
      }
    },

    mounted(){
      this.getApi();
    }
  }



</script>

<template>

    <h1>I progetti</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="project in projects" >{{project.title}}</li>
    </ul>

</template>

<style>

</style>
