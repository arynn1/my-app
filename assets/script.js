const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const convertBtn = document.querySelector('#convert-btn');
const resetBtn = document.querySelector('#reset-btn');
const copyBtn = document.querySelector('#copy-btn');

function reverseString(string){
    return [...string].reverse().join('');
}

function copyText() {
    if (!outputField.value) return;
    navigator.clipboard.writeText(outputField.value);
}

copyBtn.addEventListener('click', () => copyText());

convertBtn.addEventListener('click', () => {
    outputField.value = reverseString(inputField.value);
});

resetBtn.addEventListener('click', ()=> {
    inputField.value = "";
    outputField.value = "";
});