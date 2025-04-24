// import { useState } from 'react'
import './App.css'
import foto from './assets/foto.jpeg';

function App() {
  return (
    <div>
      {/* Primo blocco invito */}
      <div className="container">
        <p className="sottile">È con grandissima gioia che</p>
        <h1 className="titolo">Nicola e Lorena</h1>
        <p className="sottile">e le loro famiglie</p>
        <p className="sottile">vi invitano al loro matrimonio</p>
        <p className="data">
          4 settembre 2025
          <br />
          ore 16:00
        </p>
        <p className="location">
          <a
            href="https://maps.app.goo.gl/brCmg2hXxM8nvtnZ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Villa Vittoria
            <br />
            Via Cifelli 44 - Boscotrecase (Na)
          </a>
        </p>
      </div>

      {/* Secondo blocco call-to-action */}
      <div className="cta-layout">
        <div className="cta-text">
          <h2>Il grande giorno</h2>
          <p>
            Siete pronti a vivere questo grande giorno insieme? Noi sì!<br /><br />
            Abbiamo bisogno della vostra partecipazione per renderlo ancora più speciale.<br /><br />
            Fateci sapere al più presto se sarete con noi!<br /><br />
            Non vediamo l'ora di condividere questa esperienza con voi!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmrbUrSAhwl3G0CWdRvLfsQzhc8cZGi8hU9KO9FOq7A6g_jg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Conferma la tua presenza
          </a>
        </div>
        <div className="cta-img-container">
          <img
            src={foto}
            alt="Nicola e Lorena"
            className="cta-img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
