<template>
<div>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        <h1>User Profile Card Details</h1>
        <h2> Name : {{ userDetails.name }} </h2>
        <h2> User Name : {{ userDetails.username }} </h2>
        <h2> Email : {{ userDetails.email }} </h2>
        <h2> Address : {{ userDetails?.address?.street }} {{ userDetails?.address?.suite }} {{ userDetails?.address?.city }} {{ userDetails?.address?.zipcode }}</h2>
        <button @click="togglePosts">Toggle Posts</button>
        <div v-if="isPostVisible">
        <slot name="post" v-for="(post,index) in userPosts" :key="index" class="userPosts" :post="post">
            <UserPost :post="post"/>
        </slot>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
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
        ...mapGetters('users',['userDetails', 'userPosts','loading']),

        filteredData(){
            return this.userPosts.filter ((post,index) => {
                post.title.toLowerCase().includes(this.seachedUser.toLowerCase())
            })
        }
    },

    methods: {
        togglePosts(){
            this.isPostVisible = !this.isPostVisible;
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
</style>