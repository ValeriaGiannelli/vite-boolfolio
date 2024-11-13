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
            },
            sent: false
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
            axios.post(store.apiUrl +'send-email', data)
                .then(res=>{
                    console.log(res.data);
                    if(!res.data.success){
                        this.errors = res.data.errors;
                    }else {
                        this.sent = true;
                        this.errors={
                            name:[],
                            email:[],
                            message:[]
                        }
                    }
                })
                .catch(er =>{
                    console.log(ser.message);
                })
        }
    }

}

</script>


<template>

    <div>
        <form v-if="!sent" action="#" @submit.prevent="sendForm">
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
                <label for="message">Messaggio</label>
                <textarea v-model="message" id="message"></textarea>
                <p>{{errors.message?.toString()}}</p>
            </div>
            <button type="submit">Invia</button>
            <button type="reset">Annulla</button>
        </form>
        <h2 v-else>Il messaggio è stato inviato correttamente</h2>
    </div>


</template>

<style lang="scss" scoped>

$primary-color: cadetblue;
$secondary-color: #2ecc71;
$error-color: #e74c3c;
$input-background: #f2f2f2;
$border-radius: 8px;

form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: $border-radius;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: $border-radius;
    background-color: $input-background;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  p {
    color: $error-color;
    font-size: 0.9em;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  button {
    display: inline-block;
    padding: 12px 20px;
    margin: 10px 15px 0 0;
    font-weight: bold;
    color: white;
    background-color: $primary-color;
    border: none;
    border-radius: $border-radius;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
    }

    &:nth-child(2) {
      background-color: $error-color;
      margin-left: 10px;

      &:hover {
        background-color: darken($error-color, 10%);
      }
    }
  }
}

h2 {
  text-align: center;
  color: $secondary-color;
  margin-top: 50px;
}
</style>