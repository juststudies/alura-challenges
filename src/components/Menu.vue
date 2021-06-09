<template>
    <nav>
        <h2>Menu</h2>
        <ul class="menu">
            <li class="menu__item">
                <div class="menu__link">
                    <router-link to="/" exact>
                        <div class="menu__icon">
                            <img src="../assets/img/icons/code.svg" alt="code icon">
                        </div>
                        <p>Editor de Código</p>
                    </router-link>
                </div>
            </li>
            <li class="menu__item">
                <div class="menu__link menu__item--disabled">
                    <router-link to="/community" >
                        <div class="menu__icon">
                            <img src="../assets/img/icons/comunity.svg" alt="comunity icon">
                        </div>
                        <p>Comunidade</p>
                    </router-link>
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

<style>
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

nav .menu .menu__item .menu__link .router-link-active,
nav .menu .menu__item .menu__link a,
nav .menu .menu__item .menu__link .menu__icon,
nav .menu .menu__item .menu__link p{
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

nav .menu .menu__item .menu__link{
    opacity: 16%;
}

nav .menu .menu__item .menu__link:hover{ 
    opacity: 64%;
}

nav .menu .menu__item .menu__link:not(.menu__item--disabled),
nav .menu .menu__item .menu__link:not(.menu__item--disabled):hover{
    opacity: 100%;
}


</style>