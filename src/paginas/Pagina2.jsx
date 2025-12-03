import { useEffect, useState } from 'react'
import './pagina2.css'

function Pagina2() {

  const [x, setX] = useState(0);

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
      <h1>Hola Mundo desde Pagina 2</h1>
      <button onClick={() => setX(x + 1)}>Incrementar</button>
    </>
  )
}

export default Pagina2
