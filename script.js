const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("toggle-btn");
const content = document.querySelector(".content"); // fixed selector

function toggleSidebar() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    content.classList.add("noscroll");
  } else {
    content.classList.remove("noscroll");
  }
}

toggleBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);
