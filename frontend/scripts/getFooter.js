window.addEventListener("DOMContentLoaded", displayFooter);

function displayFooter() {
  const footer = document.getElementById("footer");

  const content = `<div>
  <span class='footerText'>Copyright © 2022-2023 Sabka Bazaar Grocery Supplies Pvt Ltd</span>
</div>`;

  footer.innerHTML += content;
}
