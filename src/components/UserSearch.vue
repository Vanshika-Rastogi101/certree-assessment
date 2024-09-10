<template>
    <div>
        <h1>Search User</h1>
        <input type="text" placeholder = "Search Users" @input="seachUsers" v-model="seachedUser"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    data(){
        return{
            seachedUser:''
        }
    },

    methods : {
        ...mapActions('users',['fetchUserData']),
        seachUsers(){
            if (this.seachedUser.trim() !== '') {
                const userId = 1;
                this.fetchUserData(userId);
            }
        }
    }
}
</script>

<style>
</style>