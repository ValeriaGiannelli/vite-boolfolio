<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'Contacts',
    data(){
        return{
            name: '',
            email:'',
            message:'',
            errors:{
                name:[],
                email:[],
                message:[]
            }
        }
    },
    methods:{
        sendForm(){

            const data = {
                name: this.name,
                email:this.email,
                message: this.message
            }

            // chiamata axio
            axios.post(store.apiUrl + 'send-email', data)
                .then(res=>{
                    console.log(res.data);
                    if(!res.data.success){
                        this.errors = res.data.errors;
                    }
                })
                .catch(er =>{
                    console.log(er.message);
                })
        }
    }

}

</script>


<template>

    <div>
        <form action="#" @submit.prevent="sendForm">
            <div>
                <label for="name">Name</label>
                <input v-model="name" type="text" id="name">
                <p>{{errors.name?.toString()}}</p>
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="text" id="email">
                <p>{{errors.email?.toString()}}</p>
            </div>
            <div>
                <label for="message">Name</label>
                <textarea v-model="message" id="message"></textarea>
                <p>{{errors.message?.toString()}}</p>
            </div>
            <button type="submit">Invia</button>
            <button type="reset">Annulla</button>
        </form>
    </div>


</template>

<style lang="scss" scoped>
</style>