<template>
  <div>
    <UserSearch/>
    <UserProfileCard @toggle-posts="togglePosts"/>
  </div>
</template>

<script setup>
import UserSearch from './components/UserSearch.vue'
import UserProfileCard from './components/UserProfileCard.vue'
</script>

<style scoped>

</style>
