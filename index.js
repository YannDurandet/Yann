let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  } else {
    document.body.classList.remove("dark-theme")
  }
}
/* THIS SHIT DOESNT FUCKING WOOOOOOOOOORK

}
let langs = document.querySelector(".langs"),
  link = document.querySelectorAll("a"),
  title = document.querySelector(".title"),
  descr = document.querySelector(".headerParagraph");

link.forEach(el => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language")

    title.textContent = data[attr].title
    descr.textContent = data[attr].description
  })
})

let data = {
  french: {
    title: "Salut,",
    description: "Je suis un développeur Web junior, vous pouvez lire plus ici à propos de moi."
  },
  english: {
    title: "Hey,",
    description: "I'm an aspiring French Front-End Web Developer, you can read more about me."
  },
}

*/