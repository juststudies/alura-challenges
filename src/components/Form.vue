<template>
    <form action="">
        <div class="project">
            <h2>Seu projeto</h2>
            <input type="text" class="project__title" placeholder="Nome do seu projeto">
            <textarea name="description" class="project__description" placeholder="Descrição do seu projeto"></textarea>
        </div>

        <div class="customization">
            <h2>Personalização</h2>
            <div class="customization__options">
                <select class="languages">
                    <option value="javascript" selected>JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
                <div id="color">
                    <input type="color" value="#6BD1FF"/>
                </div>
            </div>
        </div>
        <button type="submit">Salvar projeto</button>
    </form>
</template>

<script>
    export default {
        name: 'Form'
    }
</script>

<style scoped>
    form{
        width: 20%;
        display: flex;
        flex-direction: column;
        color: var(--branco);
    }

    form .project h2,
    form .customization h2{
        height: 18px;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.4em;
        text-transform: uppercase;
    }

    form .project .project__title,
    form .project .project__description,
    form .customization select{
        height: 56px;
        width: 100%;
        margin-top: 16px;
        padding: 14px 16px;
        background: var(--bg-opacity);
        border: none;
        border-radius: var(--border-radius);
        font-size: 16px;
        color: var(--branco);
    }

    form .project .project__description{
        resize: none;
        height: 80px;
        font-family: var(--font-family);
    }

    form .project .project__description:hover,
    form .project .project__title:hover,
    form .customization select:hover{
        background: var(--color-hover);
    }

    form .customization{
        margin-top: 40px;
    }

    form .customization select{
        appearance: none;
        background-image: url('../assets/img/icons/arrow-down.svg');
        background-repeat: no-repeat;
        background-position: 95.15% 50%;
        color: rgba(255, 255, 255, 0.64);
    }

    form .customization select option{
        background-color: var(--bg);
    }

    form .customization #color{
        width: 100%;
        height: 56px;
        margin-top: 1rem;
        border-radius: var(--border-radius);

        border: 1px solid var(--border-color);
    }

    form .customization #color input{
        width: 94%;
        border: none;
        height: 40px;
        appearance: none;
        margin: 8px;
        border-radius: 4px;
    }

    form [type="submit"]{
        width: 100%;
        height: 56px;
        margin-top: 32px;
        background-color: var(--submit-button-background);
        color: var(--submit-button-color);
        border: 0;
        border-radius: var(--border-radius);
        font-size: 16px;
        line-height: 24px;
        text-align: center;
    }

    form [type="submit"]:hover{
        background: var(--submit-button-bg-hover);
    }

    form [type="submit"]:active{
        border: 4px solid var(--submit-button-bg-pressed);
    }

    form [type="submit"]:focus{
        background: var(--submit-button-bg-focus);
    }

</style>