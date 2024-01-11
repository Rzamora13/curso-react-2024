import  { useState } from 'react'
const initialState ={
    Rafa: 0,
    Comino: 0
}

const ContadorDoble = () => {

    const [friends, setFriends] = useState(initialState);

    function handleIncrementRafa() {
        setFriends( {...friends, Rafa:friends.Rafa+1} )
    }
    function handleIncrementComino() {
        setFriends( {...friends, Comino:friends.Comino+1} )
    }
  return (
    <>
        <div>
            <span>Rafa tiene: <strong>{friends.Rafa}</strong></span>
            <button onClick={handleIncrementRafa}>Aumentar un amigo</button>
        </div>
        <div>
            <span>Comino tiene: <strong>{friends.Comino}</strong></span>
            <button onClick={handleIncrementComino}>Aumentar un amigo</button>
        </div>
    </>
  )
}

export default ContadorDoble