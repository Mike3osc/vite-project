/*Vite nos permite crear modulos independientes que despues podemos trasferir a nuestra
aplicacion o pagina web, además de organizarlos y ordenarlos de manera que pesen menos
y asi acelerar la carga de la aplicacion.
Para ello usamos la palabra restringida export, que lo que hara es transferir el 
contenido, en este caso de la constante person, a la aplicacion.
*/

export const person = {
  name: "Miguel",
  surname: "Hernandez"
}

export const sayHello = () => {
  console.log("Hello World!")
}

const MAIN_LANGUAJE = "JavaScript";
export default MAIN_LANGUAJE

export const sum = (a, b) => a + b;
sum();

/*no es comun pero podemos usar export default, que nos permite exportar 
constantes de relevancia o de mayor importancia que no cambiarán mas adelante 
en nuestra app. 
A la hora de llevarlo al main, no hacen falta los curly brackets y ademas 
le podemos cambiar el nombre 
SOLAMENTE PUEDE HABER UN EXPORT DEFAULT POR ARCHIVO*/