document.addEventListener('DOMContentLoaded', () => {
  const background = document.getElementById('background');
  const textInput = document.getElementById('textInput');
  const characterCount = document.getElementById('characterCount');
  let totalCharacters = 0;

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const fadeOut = (element) => {
    element.style.opacity = '0';
    setTimeout(() => element.remove(), 2000);
  };

  const addTextToBackground = (text) => {
    const textElement = document.createElement('div');
    textElement.classList.add('text-background');
    textElement.textContent = text;
    textElement.style.fontSize = `${getRandomInt(1, 10)}rem`;
    textElement.style.top = `${getRandomInt(0, window.innerHeight)}px`;
    textElement.style.left = `${getRandomInt(0, window.innerWidth)}px`;
    document.body.appendChild(textElement);
    setTimeout(() => fadeOut(textElement), 3000);
  };

  const updateCharacterCount = (text) => {
    totalCharacters += text.length;
    characterCount.textContent = `Total Chars: ${totalCharacters}`;
  };

  const handleTextInput = (event) => {
    const text = event.target.value.trim();
    if (text) {
      updateCharacterCount(text);
      addTextToBackground(text);
      // Keep the text in the input box
    }
  };

  textInput.addEventListener('input', handleTextInput);
});
