<template>
    <nav>
        <h2>Menu</h2>
        <ul class="menu">
            <li class="menu__item">
                <div class="menu__icon">
                    <img src="../assets/img/icons/code.svg" alt="code icon">
                </div>
                <p>Editor de Código</p>                                      
            </li>
            <li class="menu__item menu__item--disabled">
                <div class="menu__link" href="#">
                    <div class="menu__icon">
                        <img src="../assets/img/icons/comunity.svg" alt="comunity icon">
                    </div>
                    <p><router-link to="/community">Comunidade</router-link></p>
                </div>
            </li>
            <section class="responsive">
                <div class="responsive--divisor"></div>
                <div class="responsive__profile">
                    <img src="../assets/img/profile/Author.png" alt="imagem do perfil">
                    <span>Nicolas</span>
                </div>
            </section>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Menu',
        
    }
</script>

<style scoped>
nav{
    width: 18%;
    color: var(--branco);
}

nav h2{
    height: 18px;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
}

nav .menu{
    list-style: none;    
}

nav .menu .menu__item {
    display: flex;
    margin-top: 16px;
}

nav .menu .menu__item .menu__link,
nav .menu .menu__item .menu__icon,
nav .menu .menu__item p{
    display: flex;
    justify-content: center;
    align-items: center;
}


nav .menu .menu__item .menu__icon{
    width: 3rem;
    height: 3rem;
    background-color: var(--icon-bg);
    border-radius: var(--border-radius);
    margin-right: 1rem;
}

nav .menu .menu__item--disabled{
    opacity: 16%;
}

nav .menu .menu__item--disabled:hover{
    opacity: 64%;
}


</style>