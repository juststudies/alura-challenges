<template>
    <main class="code">
        <div class="code__wrapper code--border">
            <div class="mac-buttons"></div>
            
            <div class="code__editor">
                <code class="preview hljs" contenteditable="true" aria-label="editor"></code>
            </div>
        </div>
        <button class="code__button">Visualizar com o Highlight</button>
    </main>
</template>

<script>
    export default {
        name:'Editor'
        
    }
</script>

<style scoped>
    .code{
        display: flex;
        flex-direction: column;
        width: 55%;
    }

    .code .code--border{
        width: 100%;
        
        background-color: var(--border-textarea);
        padding: 2rem;
        border-radius: var(--border-radius);
    }

    .code .code__wrapper{
        width: 100%;
    }

    .code .code__wrapper .mac-buttons{
        width: 100%;
        height: 34px;
        display: flex;
        background-image: url('../assets/img/icons/mac_buttons.svg');
        background-repeat: no-repeat;
        background-position: 1em 1em;
        background-color: var(--bg-textarea);
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        margin-bottom: -6px;
    }

    .code .code__wrapper code{
        width: 100%;
        height: 302px;
        display: block;
        border: none;
        border-radius: var(--border-radius);
        background-color: var(--bg-textarea);
        padding: 24px 16px;
        color: var(--branco);
        font-size: 14px;
        line-height: 18px;
        font-family: 'Roboto', sans-serif;
        overflow: auto;
    }


    .code .code__button{
        height: 56px;
        margin-top: 32px;
        background-color: var(--button-color);
        border-radius: var(--border-radius);
        border: none;
        font-size: 1rem;
        line-height: 24px;
        color: var(--branco);
        text-align: center;
    }
</style>