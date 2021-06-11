<template>
    <header>
            <div class="logo">
                <img src="../assets/img/logo/Logo.svg" alt="Logo Alura Dev">
            </div>
            <div class="search-icon" @click="handleSearchIcon()" @blur="handleRemoveStyles()">
                <img src="../assets/img/icons/search.svg" alt="search icon">
            </div>
            <input type="text" class="search-box" placeholder="Busque por algo">
            
            <div class="profile">
                <div class="profile__container">
                    <img src="../assets/img/profile/Author.png" alt="imagem do perfil">
                    <span>Nicolas</span>
                </div>
            </div>
            <div class="burger-menu">
                <img src="../assets/img/icons/burger-icon.svg" alt="burger icon menu" @click="handleBurgerMenu()">
            </div>
        </header>
</template>

<script>
    export default {
        name: 'Header',
        
        methods:{
            handleBurgerImage(){
                const burgerImage = document.querySelector('.burger-menu');
                
                if (burgerImage.querySelector('img').src.indexOf('burger-icon')!=-1) {
                    burgerImage.querySelector('img').src  = require("../assets/img/icons/close.svg");
                }
                
                else {
                    burgerImage.querySelector('img').src = require("../assets/img/icons/burger-icon.svg");
                }

            },

            handleBurgerMenu(){
                this.handleBurgerImage();
                const nav = document.querySelector('nav');
                nav.classList.toggle('menu__responsive');
            },

            handleSearchIcon(){
                const searchIcon = document.querySelector('.search-icon');

                document.querySelector('.logo').style.display = 'none';
                searchIcon.querySelector('img').style.display = 'none';
                document.querySelector('.search-box').style.display = 'block';
                document.querySelector('.search-box').style.position = 'absolute';
                document.addEventListener('keyup', (ev)=>{
                    if(ev.key === "Escape"){
                        this.handleRemoveStyles();
                        console.log('disparou!');
                    }
                });
            },

            handleRemoveStyles(){
                const searchIcon = document.querySelector('.search-icon');
                document.querySelector('.logo').removeAttribute('style');
                searchIcon.querySelector('img').removeAttribute('style');
                document.querySelector('.search-box').removeAttribute('style');
            }
        },

        watch:{
            '$route'(){
                this.handleRemoveStyles();
                const burgerImage = document.querySelector('.burger-menu');
                burgerImage.querySelector('img').src = require('../assets/img/icons/burger-icon.svg');
            }
        }
    }
</script>

<style scoped>

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .logo{
        width: 20%;
    }

    header .search-icon{
        display: none;
    }

    header .search-box{
        width: 55%;
        height: 56px;
        border: 0;
        border-radius: var(--border-radius);
        background-color: var(--bg-opacity);
        color: var(--branco);
        padding: 14px 16px;
        font-size: 1rem;
        line-height: 24px;
    }

    header .search-box:hover{
        background: var(--color-hover);
    }

    header .profile{
        width: 22%;
        height: 56px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    header .profile .profile__container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }

    header .profile .profile__container:hover{
        border-radius: var(--border-radius);
        background: var(--bg-hover-color);
    }

    header .profile .profile__container span{
        margin-left: 12px;
        color: var(--branco);
        font-size: 1rem;
        line-height: 24px;
    }

    header .burger-menu{
        display: none;
    }

</style>