import { useState } from "react";

const initialState ={
    Rafa: 0,
    Comino: 0
}
const ContadorDobleBest = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrement(nombre) {
        setFriends( {
            ...friends,
            [nombre]: friends.nombre+1
        });
    }
  return (
    <>
        <div>
            <span>Rafa tiene: <strong>{friends.Rafa}</strong></span>
            <button onClick={()=>handleIncrement(friends.Rafa)}>Aumentar un amigo</button>
        </div>
        <div>
            <span>Comino tiene: <strong>{friends.Comino}</strong></span>
            <button onClick={()=>handleIncrement(friends.Comino)}>Aumentar un amigo</button>
        </div>
    </>
  )
}

export default ContadorDobleBest