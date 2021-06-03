<template>
    <div>
        <Header />
        <div class="container">
            <Menu/>
            <Editor />
            <Form/>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    import Menu from './Menu';
    import Editor from './Editor';
    import Form from './Form';
    export default {
        name: 'Main',
        components: {
            Header, 
            Menu,
            Editor,
            Form            
        }
    }
</script>

<style scoped>
.container{
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
}
</style>