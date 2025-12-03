import { useContext, useEffect, useState } from 'react'
import './pagina2.css'
import { UserContext } from '../context/userContext';

function Pagina2() {

  const [x, setX] = useState(0);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("Hola " + x);
  }, [x]);
  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log("Intervalo " + x);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h1>Hola Mundo desde Pagina 2 {user}</h1>
      <button onClick={() => setX(x + 1)}>Incrementar</button>
      <button onClick={() => setUser("Luis")}>Cambiar a Luis</button>
    </>
  )
}

export default Pagina2
