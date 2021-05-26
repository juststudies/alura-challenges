const codeWrapper = document.querySelector('.code-wrapper');
const selectLanguage = document.querySelector('select');
const previewHighlight = document.querySelector('button');

function changeLanguage(){
    const code = codeWrapper.querySelector('#code-editor');
    codeWrapper.innerHTML = `<code class="preview hljs ${selectLanguage.value}" contenteditable="true" aria-label="editor"></code>`;
    codeWrapper.querySelector('code').innerText = code.innerText;
}

selectLanguage.addEventListener('change', ()=>{
    changeLanguage();
});

previewHighlight.addEventListener('click', ()=>{
    const code = codeWrapper.querySelector('code');
    hljs.highlightElement(code);
});
