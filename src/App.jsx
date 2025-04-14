import { useState } from 'react'
import './App.css'
import foto from './assets/foto.jpeg';

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <div className="App">
      <div className="container" style={{ marginBottom: "2rem"}}>
        <p>È con grandissima gioia che</p>
        <h1 style={{fontFamily: "Great Vibes"}}>Nicola e Lorena</h1>
        <p>e le loro famiglie</p>
        <p>vi invitano al loro matrimonio</p>
        <p style={{fontFamily: 'Satisfy'}}>
          4 settembre 2025
          <br/>
          ore 16:00
        </p>
        <p style={{ marginBottom: "2rem", fontFamily: 'Playfair Display'}}>
          <a href="https://maps.app.goo.gl/brCmg2hXxM8nvtnZ7" target="_blank" rel="noopener noreferrer">
            Villa Vittoria
            <br/>
            Via Cifelli, 44 - Boscotrecase (Na)
          </a>
        </p>
      </div>
      <img src={foto} alt="Proposta di matrimonio di Nicola e Lorena" width="300" />
    </div>
  );
}

export default App
