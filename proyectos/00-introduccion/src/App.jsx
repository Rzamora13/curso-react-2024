// import
import "./App.css"
import Contador from "./components/UseState/Contador.jsx";
import ContadorDoble from "./components/UseState/ContadorDoble.jsx";
import ContadorDobleBest from "./components/UseState/ContadorDobleBest.jsx";

//Variables globales

const App = () => {
  /*Hooks

  //Variables locales
  const texto="Hola mundo";
  const numero= 22;
  const array= ["pera", "manzana", "naranja"];
  const objeto= {
    nombre: "Rafa",
    edad: 20
  }

  //funciones del componente

  return (
    <div>
      <h1>Ejemplo basico jsx</h1>
      <h2>Variable y objetos jsx</h2>
      <div>
        <h3>la variable texto vale {texto}</h3>
        <h3>la variable numero vale {numero}</h3>
        <h3>la variable nombre dentro de objeto vale Nombre: {objeto.nombre}</h3>
        <h3>la variable edad dentro de objeto vale Edad: {objeto.edad}</h3>
        <h3>la variable array vale
          {array.map((fruta, index) => (
        <li key={index}>{fruta}</li>))}
        </h3>


      </div>


    </div>
  )*/
  return (
    <>
      <ContadorDobleBest />
    </>

  )



}

export default App;