const codeEditor = document.querySelector('.code__editor');
const selectLanguage = document.querySelector('.languages');
const previewHighlight = document.querySelector('.code__button');

function changeLanguage(){
    const code = codeEditor.querySelector('code');
    codeEditor.innerHTML = `<code class="preview hljs ${selectLanguage.value}" contenteditable="true" aria-label="editor"></code>`;
    codeEditor.firstChild.innerText = code.innerText;  
}

selectLanguage.addEventListener('change', ()=>{
    changeLanguage();
});

previewHighlight.addEventListener('click', ()=>{
    const code = codeEditor.querySelector('code');
    hljs.highlightBlock(code);
});
