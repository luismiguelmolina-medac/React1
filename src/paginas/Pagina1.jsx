import { useState } from 'react'
import './pagina1.css'


function Pagina1({ mensaje }) {
  //let nombre = "Luis";
  const [nombre, setNombre] = useState("Luis");
  const [numero, setNumero] = useState(0);
  const [generados, setGenerados] = useState([]);
  const [par, setPar] = useState(true);
  let numeros = [5, 10, 15, 20, 25];

  setTimeout(() => {
    setNombre("Carlos");
  }, 3000);

  setTimeout(() => {
    setPar(!par);
    console.log("cambio " + par);

  }, 2000);

  let html = [];
  for (let i = 0; i < numeros.length; i++) {
    html.push(<li>{numeros[i]}</li>);
  }

  return (
    <>
      <h1>Hola Mundo {nombre}</h1>
      <h3>{numero}</h3>
      <button onClick={() => {
        let x = generarNumero();
        setNumero(x);
        setGenerados([...generados, x]);
      }
      }>Número</button>
      <p>{mensaje}</p>
      <ul>
        {generados.map((num) => (
          <li style={par ?
            (num % 2 == 0 ?
              { color: "red" }
              : {}
            ) : (
              num % 2 != 0 ?
                { color: "red" }
                : {}
            )}  >{num}</li>
        ))}
        {html}
      </ul>
    </>
  )
}

function generarNumero() {

  return Math.floor(Math.random() * 100);
}

export default Pagina1
