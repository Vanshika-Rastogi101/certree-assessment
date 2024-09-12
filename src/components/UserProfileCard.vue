<template>
<div>
    <div v-if="loading">
        <h1>Loading...</h1>
    </div>
    <div v-else>
        <h1>User Profile Card Details</h1>
        <hr/>
        <div v-for="(user,index) in users" :key="index" class="user-details">
            <h2> Name : {{ user.name }} </h2>
            <h2> Email : {{ user.email }} </h2>
            <h2> Address : {{ user?.address?.street }} {{ user?.address?.suite }} {{ user?.address?.city }} {{ user?.address?.zipcode }}</h2>
            <button class="btn-toggle-posts" @click="togglePosts(user.id)">Toggle Posts</button>
        </div>
        <div v-if="isPostVisible" class="posts">
        <slot name="post" v-for="(post,index) in userPosts" :key="index" class="userPosts" :post="post">
            <UserPost :post="post"/>
        </slot>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserPost from './UserPost.vue';
export default {
    components:{
        UserPost
    },
    data(){
        return{
            isPostVisible : false
        }
    },

    computed:{
        ...mapGetters('users',['userDetails', 'userPosts','loading','users']),

        filteredData(){
            return this.userPosts.filter ((post,index) => {
                post.title.toLowerCase().includes(this.seachedUser.toLowerCase())
            })
        }
    },

    methods: {
    ...mapActions('users',['fetchUserDataById']),
        togglePosts(id){
            this.isPostVisible = !this.isPostVisible;
            let posts = this.fetchUserDataById(id);
            console.log("posts",posts,this.userPosts);
            this.$emit('toggle-posts',this.isPostVisible);
        }
    },

    watch: {
    seachedUser() {
      if (this.seachedUser.trim() !== '') {
        const userId = 1;
        this.fetchUserData(userId);
      }
    }
  }
}
</script>

<style scoped>
    .userPosts{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap:20px;
    }
    .posts{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .user-details{
        text-align:center;
    }

    h1{
        text-align:center;
    }

    .btn-toggle-posts{
        background:#C5C6C7;
        font-size:20px;
        padding:10px;
    }

    @media screen and (max-width: 915px) {
        .posts{
            display:grid;
            grid-template-columns: 1fr;
        }
    }
</style>