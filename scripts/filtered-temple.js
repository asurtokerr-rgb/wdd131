
document.getElementById("lastModified").textContent = document.lastModified;
const short = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lim, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Manila Philippines",
        location: "Quezon City, Philippines",
        dedicated: "1984, September 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/320x200/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },

    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, Cebu, Philippines",
        dedicated: "2010, June 13",
        area: 29556,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/3b515c363a8c71994bd6e110cf021fc84d9c90f6/full/500%2C/0/default"
    },

    {
        templeName: "Urdaneta Philippines",
        location: "Udaneta City, Pangasinan, Philippines",
        dedicated: "2024, April 28",
        area: 32604,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/46910789b4c911eeaf5feeeeac1ed77e9a30ef3f/full/500%2C/0/default"
    }
];

createTempleCards(temples);
// filter function 
//  home,old, new, large, small, philippines
const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', () => { createTempleCards(temples); });


// old
const oldButton = document.querySelector("#old");
oldButton.addEventListener('click', () => {
    let oldTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900);
    createTempleCards(oldTemples);
});

// new
const newButton = document.querySelector("#new");
newButton.addEventListener('click', () => {
    let newTemples = temples.filter(temple => Number(temple.dedicated.split(',')[0]) > 2000); createTempleCards(newTemples)

});

// large
const largeButton = document.querySelector("#large");
largeButton.addEventListener('click', () => { let largeTemples = temples.filter(temple => temple.area > 90000); createTempleCards(largeTemples); });

// small
const smallButton = document.querySelector("#small");
smallButton.addEventListener('click', () => { let smallTemples = temples.filter(temple => temple.area < 10000); createTempleCards(smallTemples) });

// philippines
const phButton = document.querySelector("#philippines");
phButton.addEventListener('click', () => { let phTemples = temples.filter(temple => temple.templeName.includes("Philippines")); createTempleCards(phTemples); });





function createTempleCards(filteredTemple) {
    document.querySelector(".temples").innerHTML = "";
    filteredTemple.forEach(temple => {
        let card = document.createElement("figure");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temples.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name)
        card.appendChild(location)
        card.appendChild(dedicated)
        card.appendChild(area)
        card.appendChild(img)

        document.querySelector(".temples").appendChild(card);

    })
    // let templeCards = temples.map((temple) => `<figure><h3>${temple.templeName}</h3><p>Location: ${temple.location}</p><p>Dedicated: ${temple.dedicated}</p><p>Size: ${temple.area}</p><img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"></figure>`);
    // document.querySelector(".card").innerHTML = templeCards.join('');

};