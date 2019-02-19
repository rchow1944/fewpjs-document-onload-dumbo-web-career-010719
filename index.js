function updateDOM() {
  document.getElementById('text').textContent = "This is really cool!";
}

function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", updateDOM, false);
}

domContentLoaded();
