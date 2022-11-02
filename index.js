let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  } else {
    document.body.classList.remove("dark-theme")
  }
}