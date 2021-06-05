<template>
    <div>
        <Header />
        <div class="container">
            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    
    export default {
        name: 'Main',
        components: {
            Header,
        }
    }
</script>

<style>
    .container{
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
    }
</style>