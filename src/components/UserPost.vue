<template> 
    <div class="post">
        <h1 class="title">{{ post.title }}</h1>
        <span class="text">{{ post.body }}</span>
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
        text-align: center;
    }
    .text{
        font-size:20px;
        display: block;
        text-align: center;
        color:#636363;
    }

    
</style>