var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
var heading = document.getElementById('heading');
darkMode.addEventListener('click', function () {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');
  if (heading.innerHTML == "Light Mode") {
    heading.innerHTML = "Dark Mode";
  } else if (heading.innerHTML == "Dark Mode") {
    heading.innerHTML = "Light Mode";
  } else {
    null
  }
})