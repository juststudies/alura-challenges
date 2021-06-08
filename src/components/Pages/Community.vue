<template>
    <div class="container">
        <Menu />
        <main class="code">
            <div class="code__container">
                <div class="code__wrapper code--border" style="background-color: #9AFF6B;">
                    <div class="mac-buttons"></div>
                    <code>
                        const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
                        <br><br>
                        const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
                        <br><br>
                        const unfold = (f, seed) => {
                            const go = (f, seed, acc) => {
                                const res = f(seed)
                                return res ? go(f, res[1], acc.concat([res[0]])) : acc
                            }
                            return go(f, seed, [])
                        }
                    </code>
                </div>
                <div class="code__sections">
                    <section class="sections__info">
                        <h2>Título do projeto</h2>
                        <p>Essa é a descrição do meu projeto.</p>
                    </section>
                    <div class="sections__social">
                        <section class="social__interactions">
                            <div class="social__interactions__comments">
                                <img src="../../assets/img/icons/comments.svg" alt="comments icon">
                                <span>9</span>
                            </div>
                            <div class="social__interactions__like">
                                <img 
                                    src="../../assets/img/icons/likes.svg"
                                    alt="likes icon"                                  
                                >
                                <span>9</span>
                            </div>
                        </section>
                        <section class="social__profile">
                            <img src="../../assets/img/profile/Author.png" alt="author image">
                            <span>@Nicolas</span>
                        </section>
                    </div>
                </div>
            </div>            
            <div class="code__container">
                <div class="code__wrapper code--border" style="background-color: #6B83FF;">
                    <div class="mac-buttons"></div>
                    <code>
                        const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
                        <br><br>
                        const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
                        <br><br>
                        const unfold = (f, seed) => {
                            const go = (f, seed, acc) => {
                                const res = f(seed)
                                return res ? go(f, res[1], acc.concat([res[0]])) : acc
                            }
                            return go(f, seed, [])
                        }
                    </code>
                </div>
                <div class="code__sections">
                    <section class="sections__info">
                        <h2>Título do projeto</h2>
                        <p>Essa é a descrição do meu projeto.</p>
                    </section>
                    <div class="sections__social">
                        <section class="social__interactions">
                            <div class="social__interactions__comments">
                                <img src="../../assets/img/icons/comments.svg" alt="comments icon">
                                <span>9</span>
                            </div>
                            <div class="social__interactions__like">
                                <img 
                                    src="../../assets/img/icons/likes.svg"
                                    alt="likes icon"                                  
                                >
                                <span>9</span>
                            </div>
                        </section>
                        <section class="social__profile">
                            <img src="../../assets/img/profile/Author.png" alt="author image">
                            <span>@Nicolas</span>
                        </section>
                    </div>
                </div>
            </div>            
            <div class="code__container">
                <div class="code__wrapper code--border" style="background-color: #FFC46B;">
                    <div class="mac-buttons"></div>
                    <code>
                        const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
                        <br><br>
                        const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
                        <br><br>
                        const unfold = (f, seed) => {
                            const go = (f, seed, acc) => {
                                const res = f(seed)
                                return res ? go(f, res[1], acc.concat([res[0]])) : acc
                            }
                            return go(f, seed, [])
                        }
                    </code>
                </div>
                <div class="code__sections">
                    <section class="sections__info">
                        <h2>Título do projeto</h2>
                        <p>Essa é a descrição do meu projeto.</p>
                    </section>
                    <div class="sections__social">
                        <section class="social__interactions">
                            <div class="social__interactions__comments">
                                <img src="../../assets/img/icons/comments.svg" alt="comments icon">
                                <span>9</span>
                            </div>
                            <div class="social__interactions__like">
                                <img 
                                    src="../../assets/img/icons/likes.svg"
                                    alt="likes icon"                                  
                                >
                                <span>9</span>
                            </div>
                        </section>
                        <section class="social__profile">
                            <img src="../../assets/img/profile/Author.png" alt="author image">
                            <span>@Nicolas</span>
                        </section>
                    </div>
                </div>
            </div>            
            <div class="code__container">
                <div class="code__wrapper code--border" style="background-color: #FF6BCD;">
                    <div class="mac-buttons"></div>
                    <code>
                        const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
                        <br><br>
                        const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
                        <br><br>
                        const unfold = (f, seed) => {
                            const go = (f, seed, acc) => {
                                const res = f(seed)
                                return res ? go(f, res[1], acc.concat([res[0]])) : acc
                            }
                            return go(f, seed, [])
                        }
                    </code>
                </div>
                <div class="code__sections">
                    <section class="sections__info">
                        <h2>Título do projeto</h2>
                        <p>Essa é a descrição do meu projeto.</p>
                    </section>
                    <div class="sections__social">
                        <section class="social__interactions">
                            <div class="social__interactions__comments">
                                <img src="../../assets/img/icons/comments.svg" alt="comments icon">
                                <span>9</span>
                            </div>
                            <div class="social__interactions__like">
                                <img 
                                    src="../../assets/img/icons/likes.svg"
                                    alt="likes icon"                                  
                                    >
                                <span>9</span>
                            </div>
                        </section>
                        <section class="social__profile">
                            <img src="../../assets/img/profile/Author.png" alt="author image">
                            <span>@Nicolas</span>
                        </section>
                    </div>
                </div>
            </div>            
        </main>
    </div>
    
</template>

<script>
    import Menu from '../Menu.vue';
    export default {
        components:{
            Menu
        },

        mounted(){
            document.querySelector("a[href='/']").closest('.menu__link').classList.add('menu__item--disabled');
            document.querySelector("a[href='/community']").closest('.menu__link').classList.remove('menu__item--disabled');    
            
            this.likeButton()
        },

        methods:{
            likeButton(){
                const like = document.querySelectorAll('.social__interactions__like');

                like.forEach(item=>{
                    item.addEventListener('click', ()=>{
                        if(item.querySelector('img').src.indexOf('likes') != -1){
                            item.querySelector('img').src = require('../../assets/img/icons/like-pressed.svg');
                            item.querySelector('span').innerText = '10';
                        }else{
                            item.querySelector('img').src = require('../../assets/img/icons/likes.svg');
                            item.querySelector('span').innerText = '9';
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped>
@import url('../../assets/css/screens/mobileCommunity.css');
@import url('../../assets/css/screens/tabletCommunity.css');

.code{
    width: 78.5%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.code .code__container .code--border{
    height: 304px;
}

.code .code__container .code__wrapper{
    border-radius: var(--border-radius);
    position: relative;
    z-index: 1;
    padding: 30px;
    margin-bottom: -6px;
}

.code .code__container .code__wrapper .mac-buttons{
    width: 100%;
    height: 34px;
    display: flex;
    background-image: url('../../assets/img/icons/mac_buttons.svg');
    background-repeat: no-repeat;
    background-position: 1em 1em;
    background-color: var(--bg-textarea);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
}

.code .code__container .code__wrapper code{
    width: 100%;
    display: block;
    border: none;
    background-color: var(--bg-textarea);
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    padding: 24px 16px;
    color: var(--branco);
    font-size: 14px;
    line-height: 18px;
    font-family: 'Roboto', sans-serif;
    overflow: auto;
}

.code .code__container .code__sections{
    background: var(--bg-sections-opacity-color);
    padding: 30px 24px;
    z-index: -1;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    color:var(--branco);
    font-family: var(--font-family);
}

.code .code__container .code__sections .sections__info h2{
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
}

.code .code__container .code__sections .sections__info p{
    line-height: 24px;
    margin-top: 8px;
}

.code .code__container .code__sections .sections__social{
    display: flex;
    justify-content: space-between;
    margin-top: 35.25px;
}

.code .code__container .code__sections .sections__social span{
    font-size: 16px;
    line-height: 24px;
}

.code .code__container .code__sections .social__interactions{
    display: flex;
    gap: 18px;
}

.code .code__container .code__sections .social__interactions .social__interactions__comments,
.code .code__container .code__sections .social__interactions .social__interactions__like{
    display: flex;
    align-items: center;
    padding: 10px;
}

.code .code__container .code__sections .social__interactions .social__interactions__comments img,
.code .code__container .code__sections .social__interactions .social__interactions__like img{
    margin-right: 10px;
}

.code .code__container .code__sections .social__interactions .social__interactions__comments:hover,
.code .code__container .code__sections .social__interactions .social__interactions__like:hover,
.code .code__container .code__sections .social__profile:hover{
    background: var(--bg-hover-color);
    border-radius: var(--border-radius);
}

.code .code__container .code__sections .social__interactions .social__interactions__comments:active,
.code .code__container .code__sections .social__interactions .social__interactions__like:active{
    background: var(--bg-opacity);
}

.code .code__container .code__sections .social__profile{
    display: flex;
    align-items: center;
    padding: 10px;
}

.code .code__container .code__sections .social__profile img{
    margin-right: 8px;
}

</style>