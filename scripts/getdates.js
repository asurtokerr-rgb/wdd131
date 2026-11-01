const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const today = new Date();

document.getElementById("lastModified").textContent = document.lastModified;


year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;