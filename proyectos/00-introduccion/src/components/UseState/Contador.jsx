import { useState } from "react";
const initialState=0;

const Contador = () => {
    const [counter, setCounter] = useState(initialState);

    function handleSumar() {
        setCounter(counter+1);
    }
    function handleRestar(restar=1) {
        setCounter(counter-restar)
    }
  return (
    <>
        <h1>Ejemplo de contador en react</h1>
        <h2>El contador vale {counter}</h2>

        <button onClick={handleSumar}>Sumar contador</button>
        <button onClick={()=>handleRestar(5)}>Restar contador</button>
       
    </>
  )
}

export default Contador