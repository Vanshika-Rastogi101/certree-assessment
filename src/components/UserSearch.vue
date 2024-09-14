<template>
    <div class="search">
        <h1>Search User</h1>
        <input type="text" placeholder = "Search Users By Name" @input="seachUsers" v-model="seachedUser"/>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default{
    data(){
        return{
            seachedUser:'',
            users: {}
        }
    },

    methods : {
        ...mapActions('users',['fetchUserData']),
        ...mapMutations('users',['SET_USERS','USER_DATA']),
        seachUsers(){
            if (this.seachedUser.trim() !== '') {
                const userId = 1;
                this.fetchUserData();
                setTimeout(()=>{
                    this.users = this.userDetails.filter((user,index)=>{
                        return user.name.toLowerCase().includes(this.seachedUser.toLowerCase())
                    })
                    this.SET_USERS(this.users);
                },1000)
            }
            else{
                this.USER_DATA({})
            }
        }
    },

    computed : {
        ...mapGetters('users',['userDetails']),
    }
}
</script>
<style scoped>

.search{
    text-align: center;
}
input{
    min-width:10%;
}
</style>