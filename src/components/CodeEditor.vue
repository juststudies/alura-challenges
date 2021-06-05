<template>
    <div class="container">
        <Menu/>
        <Editor />
        <Form/>
    </div>
</template>

<script>
    import Editor from './Editor';
    import Form from './Form';
    import Menu from './Menu';
    
    export default {
        components:{
            Editor,
            Form,
            Menu
        }    
    }
</script>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 0;
    }
</style>