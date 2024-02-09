import './style.css'


const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
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
    name: 'ASUS Chromebook CX1400FKA-EC0116 Inte',
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
const getProductTemplate = (product) => {
  return `<div class="productBlock"><h3 class="name">${product.name}</h3>
  <img src="${product.image}" alt="ordenador portatil">
  <p class="stars">${product.stars} (${product.reviews} opiniones)</p>
  <p class="price">${product.price}€</p>
  <p class="seller">Vendido por ${product.seller}</p></div>`
}

//Selecciono donde quiero meter el contenido. En este caso en la clase .products
const productList = document.querySelector(".products");
//con un bucle recorro el array y extraigo cada uno de los productos
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  //añado el contenido de cada producto al template
  productList.innerHTML += getProductTemplate(product);
}

const getVendorList = document.querySelector(".filter");

const vendorSelector = document.createElement("select");
getVendorList.appendChild(vendorSelector);


for (let j = 0; j < products.length; j++) {
  const vendors = products[j].seller;
  const vendorOptions = document.createElement("option")
  vendorOptions.innerHTML += (vendors)
  vendorSelector.appendChild(vendorOptions);
}


