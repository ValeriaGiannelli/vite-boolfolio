<script>
export default {
    name: 'Contacts',
    data(){
        return{
            name: '',
            email:'',
            message:''
        }
    },
    methods:{
        sendForm(){

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
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="text" id="email">
            </div>
            <div>
                <label for="message">Name</label>
                <textarea v-model="message" id="message"></textarea>
            </div>
            <button type="submit">Invia</button>
            <button type="reset">Annulla</button>
        </form>
    </div>


</template>

<style lang="scss" scoped>
</style>