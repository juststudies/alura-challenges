<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './Header';
    export default {
        name: 'Main',
        
        components: {
            Header
        },
    }
</script>

<style>

</style>