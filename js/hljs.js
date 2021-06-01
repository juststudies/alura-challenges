const codeWrapper = document.querySelector('.code__wrapper');
const selectLanguage = document.querySelector('select');
const previewHighlight = document.querySelector('button');

function changeLanguage(){
    const code = codeWrapper.querySelector('code');
    codeWrapper.querySelector('code').innerHTML = `<code class="hljs ${selectLanguage.value}" contenteditable="true" aria-label="editor"></code>`;
    codeWrapper.querySelector('code').innerText = code.innerText;
    console.log(selectLanguage.value);
}

selectLanguage.addEventListener('change', ()=>{
    changeLanguage();
});

previewHighlight.addEventListener('click', ()=>{
    const code = codeWrapper.querySelector('code');
    hljs.highlightElement(code);
});
