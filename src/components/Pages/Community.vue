<template>
    <div class="container">
        <Menu />
        <main id="code">
            <div class="code__container">
                <div class="code__wrapper code--border" style="background-color: #9AFF6B;">
                    <div class="code__header">
                        <div class="mac-buttons"></div>
                        <div class="language">javascript</div>
                    </div>
                    <code class="hljs javascript language-javascript">
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">pluckDeep</span>
                        = key => <span class="hljs-function"><span class="hljs-params">obj</span></span>
                        key.<span class="hljs-title function_">split</span>
                        (<span class="hljs-string">'.'</span>).
                        <span class="hljs-title function_">reduce</span>(
                        <span class="hljs-function">(
                                <span class="hljs-params">accum, key</span>)
                        </span> accum[key], obj)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">compose</span>
                        = (
                        <span class="hljs-params">...fns</span>
                        ) => 
                        <span class="hljs-function">
                            <span class="hljs-params">res =></span>
                        </span> 
                        fns.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">accum, next</span>) =>
                        </span> 
                        <span class="hljs-title function_">next</span>
                        (accum), res)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">unfold</span> = (<span class="hljs-params">(f, seed)</span>) => {
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">go</span> = (<span class="hljs-params">f, seed, acc</span>){
                        <span class="hljs-keyword">const</span> res = <span class="hljs-title function_">f</span> (seed) <span class="hljs-keyword">return</span>
                            res ?
                        <span class="hljs-title function_">go</span>
                            (f, res[<span class="hljs-number">1</span>], acc.
                        <span class="hljs-title function_">concat</span>
                            ([res[<span class="hljs-number">0</span>]])) : acc}
                        <span class="hljs-keyword">return</span> <span class="hljs-title function_">go</span>(f, seed, [])}
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
                    <div class="code__header">
                        <div class="mac-buttons"></div>
                        <div class="language">javascript</div>
                    </div>
                    <code class="hljs javascript language-javascript">
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">pluckDeep</span>
                        = key => <span class="hljs-function"><span class="hljs-params">obj</span></span>
                        key.<span class="hljs-title function_">split</span>
                        (<span class="hljs-string">'.'</span>).
                        <span class="hljs-title function_">reduce</span>(
                        <span class="hljs-function">(
                                <span class="hljs-params">accum, key</span>)
                        </span> accum[key], obj)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">compose</span>
                        = (
                        <span class="hljs-params">...fns</span>
                        ) => 
                        <span class="hljs-function">
                            <span class="hljs-params">res =></span>
                        </span> 
                        fns.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">accum, next</span>) =>
                        </span> 
                        <span class="hljs-title function_">next</span>
                        (accum), res)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">unfold</span> = (<span class="hljs-params">(f, seed)</span>) => {
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">go</span> = (<span class="hljs-params">f, seed, acc</span>){
                        <span class="hljs-keyword">const</span> res = <span class="hljs-title function_">f</span> (seed) <span class="hljs-keyword">return</span>
                            res ?
                        <span class="hljs-title function_">go</span>
                            (f, res[<span class="hljs-number">1</span>], acc.
                        <span class="hljs-title function_">concat</span>
                            ([res[<span class="hljs-number">0</span>]])) : acc}
                        <span class="hljs-keyword">return</span> <span class="hljs-title function_">go</span>(f, seed, [])}
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
                    <div class="code__header">
                        <div class="mac-buttons"></div>
                        <div class="language">javascript</div>
                    </div>
                    <code class="hljs javascript language-javascript">
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">pluckDeep</span>
                        = key => <span class="hljs-function"><span class="hljs-params">obj</span></span>
                        key.<span class="hljs-title function_">split</span>
                        (<span class="hljs-string">'.'</span>).
                        <span class="hljs-title function_">reduce</span>(
                        <span class="hljs-function">(
                                <span class="hljs-params">accum, key</span>)
                        </span> accum[key], obj)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">compose</span>
                        = (
                        <span class="hljs-params">...fns</span>
                        ) => 
                        <span class="hljs-function">
                            <span class="hljs-params">res =></span>
                        </span> 
                        fns.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">accum, next</span>) =>
                        </span> 
                        <span class="hljs-title function_">next</span>
                        (accum), res)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">unfold</span> = (<span class="hljs-params">(f, seed)</span>) => {
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">go</span> = (<span class="hljs-params">f, seed, acc</span>){
                        <span class="hljs-keyword">const</span> res = <span class="hljs-title function_">f</span> (seed) <span class="hljs-keyword">return</span>
                            res ?
                        <span class="hljs-title function_">go</span>
                            (f, res[<span class="hljs-number">1</span>], acc.
                        <span class="hljs-title function_">concat</span>
                            ([res[<span class="hljs-number">0</span>]])) : acc}
                        <span class="hljs-keyword">return</span> <span class="hljs-title function_">go</span>(f, seed, [])}
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
                    <div class="code__header">
                        <div class="mac-buttons"></div>
                        <div class="language">javascript</div>
                    </div>
                    <code class="hljs javascript language-javascript">
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">pluckDeep</span>
                        = key => <span class="hljs-function"><span class="hljs-params">obj</span></span>
                        key.<span class="hljs-title function_">split</span>
                        (<span class="hljs-string">'.'</span>).
                        <span class="hljs-title function_">reduce</span>(
                        <span class="hljs-function">(
                                <span class="hljs-params">accum, key</span>)
                        </span> accum[key], obj)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">compose</span>
                        = (
                        <span class="hljs-params">...fns</span>
                        ) => 
                        <span class="hljs-function">
                            <span class="hljs-params">res =></span>
                        </span> 
                        fns.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">accum, next</span>) =>
                        </span> 
                        <span class="hljs-title function_">next</span>
                        (accum), res)<br><br>
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">unfold</span> = (<span class="hljs-params">(f, seed)</span>) => {
                        <span class="hljs-keyword">const</span> <span class="hljs-title function_">go</span> = (<span class="hljs-params">f, seed, acc</span>){
                        <span class="hljs-keyword">const</span> res = <span class="hljs-title function_">f</span> (seed) <span class="hljs-keyword">return</span>
                            res ?
                        <span class="hljs-title function_">go</span>
                            (f, res[<span class="hljs-number">1</span>], acc.
                        <span class="hljs-title function_">concat</span>
                            ([res[<span class="hljs-number">0</span>]])) : acc}
                        <span class="hljs-keyword">return</span> <span class="hljs-title function_">go</span>(f, seed, [])}
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
    import hljs from 'highlight.js';
    
    export default {
        components:{
            Menu,
        },

        data(){
            return{
                projects: []
            }
        },

        mounted(){
            document.querySelector("a[href='/']").closest('.menu__link').classList.add('menu__item--disabled');
            document.querySelector("a[href='/community']").closest('.menu__link').classList.remove('menu__item--disabled');
            this.likeButton();
            if(localStorage.length == 0){
                return;
            }else{
                this.showProjects();
            }
            this.$nextTick(function (){
                this.likeButton();
            })
        },
        
        methods:{
            likeButton(){
                const like = document.querySelectorAll('.social__interactions__like')
                like.forEach(item=>{
                    item.addEventListener('click', ()=>{
                        if(item.querySelector('img').src.indexOf('likes') != -1){
                            item.querySelector('img').src = require('../../assets/img/icons/like-pressed.svg');
                            item.querySelector('span').innerText = Number(item.querySelector('span').innerText) + 1;
                        }else{
                            item.querySelector('img').src = require('../../assets/img/icons/likes.svg');
                            item.querySelector('span').innerText = Number(item.querySelector('span').innerText) - 1;
                        }
                    });
                });
            },

            showProjects(){
                const allProjects = document.querySelector('.container #code');  
                
                if(localStorage.length === 0){
                    return;
                }
                
                for(let i = 0; i < localStorage.length; i++){
                    this.projects.push(JSON.parse(localStorage.getItem(i)));
                }

                console.log(this.projects);

                this.projects.forEach(project =>{
                    if(project !== null){
                        allProjects.innerHTML += this.buildCard(project);
                        const htmlCode = allProjects.querySelector(`[data-id="${project.id}"]`);
                        htmlCode.querySelector('code').innerText = project.projectDetails.code;
                        hljs.highlightElement(htmlCode.querySelector('code'));
                    }
                    return;
                });
            },

            buildCard(project){
                let card = 
                `
                <div class="code__container" data-id="${project.id}">
                    <div class="code__wrapper code--border" style="background-color: ${project.projectDetails.color};">
                        <div class="code__header">
                            <div class="mac-buttons"></div>
                            <div class="language">${project.projectDetails.language}</div>
                        </div>
                        <code class="hljs ${project.projectDetails.language}">
                            ${project.projectDetails.code}
                        </code>
                    </div>
                    <div class="code__sections">
                        <section class="sections__info">
                            <h2>${project.projectDetails.title}</h2>
                            <p>${project.projectDetails.description}</p>
                        </section>
                        <div class="sections__social">
                            <section class="social__interactions">
                                <div class="social__interactions__comments">
                                    <img src=${require("../../assets/img/icons/comments.svg")} alt="comments icon">
                                    <span>0</span>
                                </div>
                                <div class="social__interactions__like">
                                    <img 
                                        src=${require("../../assets/img/icons/likes.svg")}
                                        alt="likes icon"                                  
                                    >
                                    <span>0</span>
                                </div>
                            </section>
                            <section class="social__profile">
                                <img src=${require("../../assets/img/profile/Author.png")} alt="author image">
                                <span>@Nicolas</span>
                            </section>
                        </div>
                    </div>
                </div>
                `
                return card;
            }
        }
    }
</script>

<style>
    @import url('../../assets/css/screens/tabletCommunity.css');
    @import url('../../assets/css/screens/mobileCommunity.css');

    .container #code{
        width: 78.5%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }

    .container #code .code__container .code--border{
        height: 320px;
    }

    .container #code .code__container .code__wrapper{
        border-radius: var(--border-radius);
        position: relative;
        z-index: 1;
        padding: 30px;
        margin-bottom: -6px;
    }

    .container #code .code__container .code__wrapper .code__header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: var(--bg-textarea);
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }

    .container #code .code__container .code__wrapper .mac-buttons{
        width: 100%;
        height: 34px;
        display: flex;
        background-image: url('../../assets/img/icons/mac_buttons.svg');
        background-repeat: no-repeat;
        background-position: 1em 1em;
        
    }

    .container #code .code__container .code__wrapper .language{
        display: flex;
        color: var(--branco);    
        text-transform: uppercase;
        padding: 1em;    
    }

    .container #code .code__container .code__wrapper code{
        width: 100%;
        height: calc(85% - 6px);
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

    .container #code .code__container .code__sections{
        background: var(--bg-sections-opacity-color);
        padding: 30px 24px;
        z-index: -1;
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        color:var(--branco);
        font-family: var(--font-family);
    }

    .container #code .code__container .code__sections .sections__info h2{
        font-weight: bold;
        font-size: 21px;
        line-height: 31px;
    }

    .container #code .code__container .code__sections .sections__info p{
        line-height: 24px;
        margin-top: 8px;
    }

    .container #code .code__container .code__sections .sections__social{
        display: flex;
        justify-content: space-between;
        margin-top: 35.25px;
    }

    .container #code .code__container .code__sections .sections__social span{
        font-size: 16px;
        line-height: 24px;
    }

    .container #code .code__container .code__sections .social__interactions{
        display: flex;
        gap: 18px;
    }

    .container #code .code__container .code__sections .social__interactions .social__interactions__comments,
    .container #code .code__container .code__sections .social__interactions .social__interactions__like{
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .container #code .code__container .code__sections .social__interactions .social__interactions__comments img,
    .container #code .code__container .code__sections .social__interactions .social__interactions__like img{
        margin-right: 10px;
    }

    .container #code .code__container .code__sections .social__interactions .social__interactions__comments:hover,
    .container #code .code__container .code__sections .social__interactions .social__interactions__like:hover,
    .container #code .code__container .code__sections .social__profile:hover{
        background: var(--bg-hover-color);
        border-radius: var(--border-radius);
    }

    .container #code .code__container .code__sections .social__interactions .social__interactions__comments:active,
    .container #code .code__container .code__sections .social__interactions .social__interactions__like:active{
        background: var(--bg-opacity);
    }

    .container #code .code__container .code__sections .social__profile{
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .container #code .code__container .code__sections .social__profile img{
        margin-right: 8px;
    }

</style>