document.getElementById("lastModified").textContent = document.lastModified;
const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;

let temperature = 28;
let windSpeed = 5;



function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) { return Number(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + '°C' }
    else { return "N/A" }
}

let windChill = calculateWindChill(temperature, windSpeed)

document.querySelector("#windChill").textContent = windChill;



