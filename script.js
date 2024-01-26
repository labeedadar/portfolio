// NAVBAR SCRIPTS

function displaySidebar() {
  const show = document.querySelector(".sidebar");
  show.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// SPAN SCRIPTS
var typed = new Typed(".auto-typing", {
  strings: ["Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// var typed = new Typed(".typing-2", {
//   strings: ["Developer", "Designer", "Freelancer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });
