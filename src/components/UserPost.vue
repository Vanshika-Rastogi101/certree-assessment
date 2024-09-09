<template> 
    <div class="post">
        <h1 class="title">{{ post.title }}</h1>
        <span>{{ post.body }}</span>
    </div>
</template>

<script>
export default{
    props:{
        post:Object
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .post{
        border:2px solid;
        margin:20px;
    }
    .title{
        text-transform:capitalize;
    }
</style>