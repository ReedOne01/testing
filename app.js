const Button = document.querySelector(".btn");

let darkTheme = true;
let container = document.querySelector(".container");
let link = document.querySelector(".link");
Button.addEventListener("click", () => {
  if (darkTheme) {
    container.style.backgroundColor = "#fff";
    container.style.color = "#222";
    link.style.color = "#222";
    darkTheme = false;
  } else {
    container.style.backgroundColor = "#222";
    container.style.color = "#fff";
    link.style.color = "#fff";
    darkTheme = true;
  }
});
