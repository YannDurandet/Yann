/* DARK MODE TOGGLE
  let contrastToggle = false;
  function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    } else {
      document.body.classList.remove("dark-theme")
    }
  }


/* DARK MODE SWITCH BUTTON
  var btn = document.getElementById('btn')

  function leftClick() {
    btn.style.left = '0'
  }

  function rightClick() {
    btn.style.left = '36px';
  }


/* THE HTML THAT GOES WITH IT
  <div id="btnbox">
    <div id="btn"></div>
    <button class="toggle-btn slideoff" onclick="toggleContrast()">
      <i class="fa-solid fa-sun" onclick="leftClick()"></i>
      <i class="fa-solid fa-moon" onclick="rightClick()"></i>
    </button>
  </div>


/* THE CSS THAT GOES WITH IT
  .dark-theme .title,
  .dark-theme .sectionTitle,
  .dark-theme .sectionSubtitle,
  .dark-theme .navLinkAnchor,
  .dark-theme .fa-adjust,
  .dark-theme .headerParagraph,
  .dark-theme .sectionSubtitle,
  .dark-theme .skillName,
  .dark-theme .aboutParagraph {
    color: white;
  }

  .dark-theme #about,
  .dark-theme #projects{
    background-color: black;
  }

  .dark-theme nav{
    background-color: rgba(128, 128, 128, 0.5);
  }
  .dark-theme section {
    background-color: #242424;
  }

  .dark-theme #personalLogo {
    filter: 1;
  }

  .dark-theme #landingPage {
    background: linear-gradient(337deg, rgba(73, 131, 255, 0.73) 0%, rgba(143, 52, 255, 0.719) 50%,rgba(69, 255, 239, 0.808)) 100%;
  }

  .dark-theme .lightLogo{
    display: none;
  }

  .dark-theme .darkLogo {
    display: block;
  }

/* Dark mode button test

#btnbox {   /* ITS THE BIG ASS WHITE BOX
width: 76px;
margin: 5px 4px;
position: relative;
border-radius: 40px;
background: #fff;
}

.slideoff {
padding: 8px 0 8px 10.5px;
}

.slideon {
padding: 8px 0 8px 16px;
}

.toggle-btn { /* ITS THE FUCKING ICONS
cursor: pointer;
background: transparent;
border: 0;
outline: none;
position: relative;
text-align: center;
font-size: 18px;
color: #242424;
font-weight: 700;
}

#btn { /* ITS THE UGLY ASS SLIDER
left: 0;
top: 0;
position: absolute;
width: 40px;
height: 100%;
background: #2965F1;
border-radius: 20px;
transition: .25s;
}
*/