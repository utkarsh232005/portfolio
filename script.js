document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const words = ['Utkarsh Patrikar', 'a Developer', 'a Graphic Designer', 'a Creator'];
    let wordIndex = 0;
    let letterIndex = 0;

    const type = () => {
        if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 200);
        }
    };

    const erase = () => {
        if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    };

    type();
});
