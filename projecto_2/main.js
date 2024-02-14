import './style.css'

//El primer bloque es el codigo que pinta los productos en la aplicacion:

const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 3,
    reviews: 250,
    seller: 'Bullastec',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3 15IAH8 Intel',
    price: 469,
    stars: 4,
    reviews: 285,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP 15S-FQ5085NS Intel',
    price: 559,
    stars: 3,
    reviews: 510,
    seller: 'Idiomund',
    image: 'https://img.pccomponentes.com/articles/1042/10428540/1794-hp-15s-fq5085ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP Victus 15-fa0053ns Intel',
    price: 729,
    stars: 5,
    reviews: 472,
    seller: 'Idiomund',
    image: 'https://img.pccomponentes.com/articles/1073/10733296/1176-hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad 3 15ITL6 Intel',
    price: 529,
    stars: 5,
    reviews: 316,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1074/10741921/1965-lenovo-ideapad-3-15itl6-intel-core-i5-1155g7-16-gb-512-gb-ssd-156.jpg'
  },
  {
    name: 'HP 15-fd0076ns Intel',
    price: 599,
    stars: 4,
    reviews: 161,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'ASUS Zenbook 14 OLED',
    price: 999,
    stars: 3,
    reviews: 13,
    seller: 'DMI',
    image: 'https://img.pccomponentes.com/articles/1077/10771401/1552-asus-zenbook-14-oled-ux3402va-km209w-intel-evo-core-i7-1360p-16gb-512gb-ssd-14.jpg'
  },
  {
    name: 'ASUS Chromebook CX1400FKA-EC0116 Intel',
    price: 379,
    stars: 2,
    reviews: 121,
    seller: 'Bullastec',
    image: 'https://img.pccomponentes.com/articles/1072/10726801/1477-asus-chromebook-cx1400fka-ec0116-intel-celeron-n4500-8gb-64gb-emmc-14.jpg'
  },
  {
    name: 'MSI Bravo 15 C7VE-288XES AMD',
    price: 699,
    stars: 4,
    reviews: 215,
    seller: 'Bullastec',
    image: 'https://img.pccomponentes.com/articles/1080/10801806/1884-msi-bravo-15-c7ve-288xes-amd-ryzen-5-7535hs-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'Lenovo Legion 5 15IAH7H Intel',
    price: 999,
    stars: 5,
    reviews: 194,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1062/10622704/1585-lenovo-legion-5-15iah7h-intel-core-i7-12700h-16gb-1tb-ssd-rtx3060-156.jpg'
  },

];

//Primero creo el template que quiero usar en mi pagina:

const createProductTemplate = (products) => {
  const divProducts = document.querySelector(".products");
  divProducts.innerHTML = "";

  for (const product of products) {
    const divProduct = document.createElement("div")
    const divH3 = document.createElement("h3");
    const divProductImg = document.createElement("div");
    const productImg = document.createElement("img")
    const divStarsReview = document.createElement("div");
    const divStars = document.createElement("div")
    const divReviews = document.createElement("p");
    const divPrice = document.createElement("p");
    const divSeller = document.createElement("p")

    for (let i = 1; i <= product.stars; i++) {
      const star = document.createElement("img");
      star.className = "star";
      star.src = "./assets/star_rating.png";
      divStars.appendChild(star);
    }

    divH3.textContent = product.name;
    productImg.src = product.image;
    divReviews.textContent = "Opiniones (" + product.reviews + ")";
    divPrice.textContent = "Precio: " + product.price + "";
    divSeller.textContent = "Vendido por: " + product.seller + "";

    divProduct.className = "product";
    divH3.className = "name";
    divProductImg.className = "imageDiv";
    productImg.className = "productImg";
    divStarsReview.className = "starsReviews";
    divStars.className = "stars";
    divReviews.className = "reviews";
    divPrice.className = "price";
    divSeller.className = "seller";

    divProduct.appendChild(divH3);
    divProduct.appendChild(divProductImg);
    divProductImg.appendChild(productImg);
    divProduct.appendChild(divStarsReview);
    divStarsReview.appendChild(divStars);
    divStarsReview.appendChild(divReviews);
    divProduct.appendChild(divPrice);
    divProduct.appendChild(divSeller);
    divProducts.appendChild(divProduct);
  }
}

createProductTemplate(products);

//Voy a crear dos funciones para usar mas adelante:
//Una que pinte los productos
//La otra que limpie los productos

function createList(list) {
  createProductTemplate(list);
}

//El segundo bloque pinta la seccion de filtros:

//Primero el selector de vendors:
const getVendorList = document.querySelector(".filter");

const vendorSelector = document.createElement("select");
vendorSelector.classList.add("vendors");
getVendorList.appendChild(vendorSelector);

const uniqueVendor = [];

for (let k = 0; k < products.length; k++) {
  const vendor = products[k].seller;
  if (!uniqueVendor.includes(products[k].seller)) {
    uniqueVendor.push(products[k].seller)
  }
}

for (let j = 0; j < uniqueVendor.length; j++) {
  const vendors = uniqueVendor[j];
  const vendorOptions = document.createElement("option")
  vendorOptions.innerHTML += (vendors)
  vendorSelector.appendChild(vendorOptions);
}

//añado la funcionalidad de seleccion de vendor 

vendorSelector.addEventListener("change", (event) => {
  const selectedVendor = vendorSelector.value;
  const result = products.filter((product) => product.seller === selectedVendor);
  createList(result);
});


//Segundo el filtro por precio;

const priceRangeFilter = document.createElement("input");
priceRangeFilter.setAttribute("type", "number");
getVendorList.appendChild(priceRangeFilter);
priceRangeFilter.placeholder = "Insert your budget";

const searchByPriceButton = document.createElement("button");
getVendorList.appendChild(searchByPriceButton);
searchByPriceButton.textContent = "Search";

searchByPriceButton.addEventListener("click", (event) => {
  const budgetFiltered = priceRangeFilter.value;
  const resultByPrice = products.filter((product) => budgetFiltered >= product.price);
  createList(resultByPrice);
})

//Tercero el boton para limpiar todos los filtros y sun funcionalidad

const buttonToClean = document.createElement("button");
getVendorList.appendChild(buttonToClean);
buttonToClean.textContent = "Clean Filters";
buttonToClean.addEventListener("click", (cleanFilter) => {
  priceRangeFilter.value = "";
  createList(products);
});



