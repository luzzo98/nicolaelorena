import { useState } from 'react'
import './App.css'
import foto from './assets/foto.jpeg';
import fotoloc from './assets/location.jpg'

function App() {
  const [mostraDettagli, setMostraDettagli] = useState(false);

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

      {/* terzo blocco */}
      <div className="barra-bianca"></div>
      <div className="contenuto-extra">
        <div className="sezione-foto-testo">
          <div className="foto-box">
            <img src={fotoloc} alt="Descrizione" className="immagine-extra" />
          </div>
          <div className="testo-box">
            <div className='testo-extra'>
              <h2>Lista nozze</h2>
              <p>
              Non c’è gioia più grande che poter condividere la nostra felicità con Voi, che ci avete visto crescere, ci avete sostenuto e, siamo certi, continuerete ad accompagnarci in questo percorso.
              Festeggiare insieme questo giorno sarà per noi il dono più bello!
              Qualora desideriate contribuire alla realizzazione dei nostri sogni, lo potrete fare dedicandoci un vostro pensiero che sarà per noi un grande regalo.
              </p>
              <h5>CLICCA QUI SOTTO</h5>
              <button className="btn-toggle-dettagli" onClick={() => setMostraDettagli(!mostraDettagli)}>
                🎁✈️
              </button>
              {mostraDettagli && (
                <div className="dettagli-iban">
                  <h3>IBAN</h3>
                  <h4>IT79Q0873137331000000070174</h4>
                  <h5>Intestato a: Goffi Nicola</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="barra-bianca2"></div>

      {/* ultimo blocco */}
      <footer className="footer-contatti">
        <div className="contatto">
          <img src="/img/telephone.png" alt="Telefono" className="icona" />
          <h2>Nicola</h2>
          <p><a href="tel:+393663049019">+39 366 304 9019</a></p>
        </div>
        <div className="contatto">
          <img src="/img/telephone.png" alt="Telefono" className="icona" />
          <h2>Lorena</h2>
          <p><a href="tel:+393342289857">+39 334 228 9857</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;