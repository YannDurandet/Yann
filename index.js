let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  } else {
    document.body.classList.remove("dark-theme")
  }
}


var english = document.getElementById("en"),
  french = document.getElementById("fr"),
  change_text = document.getElementById("translate");
// declare some variables to catch the various HTML elements

english.addEventListener("click", function () {
  change(english, japanese, chinese);
}, false
);

// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

french.addEventListener("click", function () {
  change(french, english);
}, false
);

function change(lang_on, lang_off) {
  if (!lang_on.classList.contains("current_lang")) {
    // if the span that the user clicks on does not have the "current_lang" class
    lang_on.classList.add("current_lang");
    // add the "current_lang" class to it
    lang_off1.classList.remove("current_lang");
    // remove the "current_lang" class from the other span
  }

  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("FRENCH");
    change_text.innerHTML = "Text Not Translated";
  }

  else if (lang_on.innerHTML == "FR") {
    change_text.classList.add("french");
    // first line adds the corrent language class to the text
    change_text.classList.remove("english");
    // second line removes the other language classes
    // this allows you to apply CSS that is specific to each language
    change_text.innerHTML = "ALLONS ENFANTS DE LA PATRIEEEEEEEE";
    // third line is where you key in the text that will replace what is currently on-screen
  }
