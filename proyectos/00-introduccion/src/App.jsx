// import

import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
import TodoListTailWindCss from "./components/UseState/TodoListTailWindCss";


//import ContadorDobleBest from "./components/UseState/ContadorDobleBest.jsx";
 
//Variables globales

const App = () => {
  /*Hooks

  //Variables locales
  const texto="Hola mundo";
  const numero= 22;
  const array= ["pera", "manzana", "naranja"];
  const objeto= {
    nombre: "jairo",
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
  /**return (
    <>
      <ContadorDobleBest />
    </>

  )*/

return (
    <>

     <h1>EJEMPLOS BASICOS REACT</h1>
    <hr />
    <RegistrarFormulario />
    <hr />
    <TodoListTailWindCss />
    </>

)
}

export default App;