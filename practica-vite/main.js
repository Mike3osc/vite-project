import './style.css';

//Creamos un array de cartas donde cada una de ellas tiene un id y color

const arrayCards = [
  {
    id: 1,
    color: "red"
  },
  {
    id: 2,
    color: "orange"
  },
  {
    id: 3,
    color: "blue"
  },
  {
    id: 4,
    color: "pink"
  },
  {
    id: 5,
    color: "black"
  },
  {
    id: 6,
    color: "red"
  },
  {
    id: 7,
    color: "orange"
  },
  {
    id: 8,
    color: "blue"
  },
  {
    id: 9,
    color: "pink"
  },
  {
    id: 10,
    color: "black"
  },
]

let counter = 0;//ponemos un contador para identificar cuantas cartas seleccionamos

//creamos una variable vacia para cada carta para poder usarlas posteriormente
let cardOne;
let cardTwo;
let points = 0;

//creamos una variable que recoge el div con id #app de nuestro documento
const divApp = document.querySelector("#app");

const pointsInHtml = document.createElement("h3");
pointsInHtml.textContent = `Points: ` + points;
document.body.insertBefore(pointsInHtml, divApp);


const check = () => {
  if (cardOne.color === cardTwo.color) {
    points++;//con cada acierto sumaremos un punto

  } else {
    points--;//con cada fallo restaremos un punto
    //ademas si fallamos necesitamos que se den la vuelta las cartas
  }
  pointsInHtml.textContent = `Points: ` + points;//de esta manera hacemos que se actualice la puntuacion cada vez que tengamos un acierto
  counter = 0;
  cardOne = undefined;
  cardTwo = undefined;
  console.log(points);

}

//creamos una funcion que recibira como parametros una carta del array y un color
const selection = (card, datasCard) => {

  if (counter < 2) {//ponemos la limitacion de solamente poder elegir dos cartas
    counter++;//como seleccionamos cartas dando click y click llama a la funcion selection
    //colocamos aqui las acumulacion del contador
    console.log("cartas seleccionadas:" + counter)
    card.style.backgroundColor = datasCard.color;//aqui le decimos que pinte el color de la carta recibida
    card.style.backgroundImage = "none";//y aqui le decimos que no pinte el bg general que hemos definido en el css
  }

  //en esta parte de la funcion lo que haremos es asignar a cada carta, los datos de la misma
  if (counter === 1) {
    cardOne = {
      cardDom: card,
      datasCard: datasCard
    };

    if (counter === 2) {
      cardTwo = {
        cardDom: card,
        datasCard: datasCard
      }
      check();
    }

  }
}



//recorremos el array para poder entrar en cada una de las cartas
arrayCards.forEach((card) => {

  //y para carta le decimos que cree un div dentro del div con id #app que habiamos seleccionado
  const divCard = document.createElement("div");

  divCard.className = "card"; // a cada div de carta le damos la clase card
  divCard.addEventListener("click", () => selection(divCard, card));
  //añadimos el escuchador de evento para que cuando se haga click, se lance una funcion
  //que envie la funcion selection una carta con un color en concreto



  divApp.appendChild(divCard);

})

