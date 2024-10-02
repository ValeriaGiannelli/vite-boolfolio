<!-- in questa pagina devo fare una chiamata all'api della pagina di dettaglio -->

<script>
import axios from 'axios';
import {store} from '../store.js';
import Loader from './partials/loader.vue';

export default{
    name: 'ProjectDetails',
    components: {
        Loader,
    },
    data(){
        return {
           //salvo le info del progetto 
           project: null
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
        getTechnologies(){
            if(!this.project) return "Errore nel caricamento della tecnologia";

            // console.log(Array.isArray(project.technologies));
            if(this.project.technologies.length){
  
                return this.project.technologies.map(result => result.name).join(', ');
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
  
    <div  v-if="project">
        <h1>{{project.title}}</h1>

        <img :src="project.img_path" :alt="project.img_original_name">

        <p>{{project.description}}</p>
        <P>Data inizio: {{dateFormat(project.start_date)}} </P>
        <p> {{ getTechnologies() }}</p>
    </div>

      <!-- loading di attesa -->
    <div class="my-loader" v-else>
        <Loader />
    </div>

</template>

<style lang="scss" scoped>

.my-loader {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

img{
    width:500px;
}

</style>
