const h1 = document.querySelector("h1");
const text = h1.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let letterCount = 0;
let interval = null;

h1.addEventListener("mouseenter", () => {

  letterCount = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    const string = text
      .split("")
      .map((char, index) => {
        if (index < letterCount) {
          return char;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    h1.innerText = string;
    letterCount += 0.25;

    if (letterCount >= text.length) {
      clearInterval(interval);
      h1.innerText = text;
    }
  }, 30);
});
