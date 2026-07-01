const typedTextSpan = document.querySelector(".typed-text");
const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
let charIndex = 0;
let wordIndex = 0;

function type(){
    if ( charIndex < words[wordIndex].length ){
        typedTextSpan.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase(){
    if ( charIndex > 0 ){
        charIndex--;
        typedTextSpan.textContent = words[wordIndex].slice(0,charIndex);
        setTimeout(erase, 200);
    }else {
        wordIndex++;
        if ( wordIndex === words.length){
            wordIndex = 0;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typedTextSpan.textContent = "";
    setTimeout(type, 1000);
})
