<!-- in questa pagina devo fare una chiamata all'api della pagina di dettaglio -->

<script>
import axios from 'axios';
import {store} from '../store.js';

export default{
    name: 'ProjectDetails',

    data(){
        return {
           //salvo le info del progetto 
           project: {} 
        }
    },

    methods: {
        getApi(slug){
            axios.get(store.apiUrl + 'progetto/' + slug)
                .then(result =>{
                    // console.log(result.data);
                    // se il progetto esiste ancora
                    if(result.data.success){
                        this.project = result.data.project;
                    } else {
                        console.log('Errore 404');    
                    }
                    
                })
        },

        // modifica della data
        dateFormat(date){
            return new Date(date).toLocaleDateString();
        },

        // linguaggi usati
        getTechnologies(project){
            
            // console.log(Array.isArray(project.technologies));
            if(Array.isArray(project.technologies) && project.technologies.length){
  
                return project.technologies.map(result => result.name).join(', ');
            } else {
                return 'Nessun linguaggio inserito'
            }
        },
    },

    mounted(){
        // console.log(this.$route.params.slug);
        const slug = this.$route.params.slug;
        
        this.getApi(slug);
    }
}

</script>

<template>
    <h1>{{project.title}}</h1>
    <img src="" alt="posto dell'immagine">
    <p>{{project.description}}</p>
    <P>Data inizio: {{dateFormat(project.start_date)}} </P>
    <p> {{ getTechnologies(project) }}</p>

</template>

<style lang="scss" scoped>

</style>
