document.getElementById("lastModified").textContent = document.lastModified;
const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;