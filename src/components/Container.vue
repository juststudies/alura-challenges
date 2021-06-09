<template>
    <div class="container">
        <Menu />
        <Editor />
        <Form />
    </div>
</template>

<script>
    import Editor from './Editor.vue';
    import Form from './Form.vue';
    import Menu from './Menu.vue';
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
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
</style>