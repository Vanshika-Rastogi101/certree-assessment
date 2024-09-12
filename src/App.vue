<template>
  <div>
    <UserSearch/>
    <UserProfileCard @toggle-posts="togglePosts"/>
  </div>
</template>

<script>
import UserSearch from './components/UserSearch.vue'
import UserProfileCard from './components/UserProfileCard.vue'

export default{
  components:{
    UserSearch,
    UserProfileCard
  },
  methods:{
    togglePosts(isPostVisible) {
      console.log(`Posts are ${isPostVisible ? 'shown' : 'hidden'}`);
    },
  }
}
</script>

<style scoped>

</style>
