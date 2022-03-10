window.onload = function() {
  addAccordionListener();
  addThemeListeners();
};

function addAccordionListener() {
  let acc = document.getElementsByClassName('accordion');

  for (let i of acc) {
    i.addEventListener('click', function() {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }}

function addThemeListeners() {

let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

  if (style == null) {
    setTheme('sky');
  } else {
    setTheme(style);
  }

  for (let i of switches) {
    i.addEventListener('click', function () {
      let theme = this.dataset.theme;
      setTheme(theme);
    });
  }
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = '/css/light.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = '/css/sky.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = '/css/purple.css';
  }
  localStorage.setItem('style', theme);
}
