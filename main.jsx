import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import logo from './nilo-logo.png';

const apartments = [
  {
    name: 'NILO Suite I',
    size: '180 m²',
    meta: '3 camere · 3 bagni · fino a circa 6 ospiti',
    text: 'La soluzione più ampia, ideale per famiglie, professionisti e soggiorni lunghi nel cuore del Valentino.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'NILO Suite II',
    size: '160 m²',
    meta: '3 camere · 3 bagni · fino a circa 6 ospiti',
    text: 'Un appartamento ampio, elegante e confortevole, pensato per permanenze brevi o prolungate.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'NILO Studio',
    size: '30 m²',
    meta: 'massimo 2 ospiti · giardino condiviso',
    text: 'Un monolocale intimo e funzionale per chi cerca tranquillità, comfort e una posizione ricercata.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
  }
];

const locationCards = [
  'Corso Sclopis 6, Torino',
  'Zona Valentino',
  'Affaccio sulla Fontana dei Dodici Mesi',
  'Comodo al centro e alla metro',
  'Zona tranquilla e ben frequentata',
  'Verde e quiete nel cuore della città'
];

const services = [
  'Wi‑Fi',
  'Parcheggio comodo',
  'Vicino metro e centro',
  'Pulizia professionale',
  'Cucina attrezzata',
  'Giardino condiviso',
  'Lavatrice',
  'Stesso palazzo',
  'Soggiorni lunghi',
  'Affaccio Valentino'
];

function App() {
  return (
    <main>
      <header className="hero panel dark-panel">
        <nav className="nav">
          <a className="logo-box" href="#top" aria-label="NILO Home">
            <img src={logo} alt="NILO Luxury Accommodations" />
          </a>
          <div className="nav-links">
            <a href="#suite">Suite</a>
            <a href="#posizione">Posizione</a>
            <a href="#servizi">Servizi</a>
            <a href="#partner">Partner</a>
            <a href="#contatti">Contatti</a>
          </div>
        </nav>

        <section className="hero-grid" id="top">
          <div>
            <p className="eyebrow">Torino · Valentino · Corso Sclopis 6</p>
            <h1>Tre soluzioni private, tra spazio, verde e quiete nel cuore del Valentino.</h1>
            <p className="lead">
              NILO Luxury Accommodations offre due grandi suite e un monolocale curato a Torino, con affaccio sulla Fontana dei Dodici Mesi del Valentino. Una proposta pensata per chi cerca ospitalità calda, qualità, tranquillità e una gestione affidabile anche per soggiorni lunghi.
            </p>
            <div className="actions">
              <a className="btn primary" href="tel:+393931965071">Chiama ora</a>
              <a className="btn secondary" href="#partner">Per agenzie</a>
            </div>
          </div>
          <div className="hero-image card-glow">
            <div className="caption">
              <span className="stars">★★★★★</span>
              <p>Ospitalità calda, standard elevati.</p>
              <small>Tre unità indipendenti, una gestione unica e riconoscibile.</small>
            </div>
          </div>
        </section>
      </header>

      <section className="panel mixed-panel" id="posizione">
        <div className="section-head">
          <p className="eyebrow gold">La posizione</p>
          <h2>La quiete del Valentino, nel cuore di Torino.</h2>
          <p>Le suite si trovano in una delle zone più riconoscibili e tranquille della città: vicino al centro, comode alla metro, immerse nel verde e affacciate sulla Fontana dei Dodici Mesi.</p>
        </div>
        <div className="grid cards-six">
          {locationCards.map((item) => <article className="mini-card" key={item}>{item}</article>)}
        </div>
      </section>

      <section className="panel dark-mixed" id="suite">
        <div className="section-head light">
          <p className="eyebrow">Spazi</p>
          <h2>Ampiezza, privacy e verde per vivere Torino con calma.</h2>
        </div>
        <div className="grid suite-grid">
          {apartments.map((apt) => (
            <article className="suite-card" key={apt.name}>
              <div className="suite-image" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.56), rgba(0,0,0,.05)), url(${apt.image})` }} />
              <div className="suite-content">
                <span className="size">{apt.size}</span>
                <h3>{apt.name}</h3>
                <p className="meta">{apt.meta}</p>
                <p>{apt.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="garden-note">Il giardino è condiviso tra le tre unità NILO: uno spazio riservato e raccolto, pensato per offrire quiete e verde pur rimanendo in città.</div>
      </section>

      <section className="panel mixed-panel" id="servizi">
        <div className="section-head">
          <p className="eyebrow gold">Servizi</p>
          <h2>Comfort completo, percezione premium.</h2>
          <p>Ogni appartamento è pensato per offrire autonomia, comodità e una permanenza serena.</p>
        </div>
        <div className="service-list">
          {services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </section>

      <section className="panel partner-panel" id="partner">
        <div className="section-head light">
          <p className="eyebrow">Per agenzie e partner</p>
          <h2>Una soluzione chiara per chi cerca case affidabili a Torino.</h2>
          <p>NILO è già presente sulle principali piattaforme di affitto breve, ma nasce anche per creare relazioni dirette con agenzie e realtà che cercano appartamenti curati per clienti, professionisti, trasferte o soggiorni temporanei.</p>
        </div>
        <div className="stats">
          <article><strong>3</strong><span>soluzioni nello stesso palazzo</span></article>
          <article><strong>1</strong><span>gestione unica e diretta</span></article>
          <article><strong>Torino</strong><span>zona Valentino, vicino al centro</span></article>
        </div>
      </section>

      <section className="panel contact-panel" id="contatti">
        <div className="contact-copy">
          <p className="eyebrow gold">Contatti</p>
          <h2>Parliamo della vostra prossima esigenza abitativa.</h2>
          <p>Contattaci per disponibilità, collaborazioni con agenzie o richieste dedicate. Ti risponderemo con una proposta chiara e adatta al tipo di soggiorno.</p>
          <a className="phone" href="tel:+393931965071">+39 393 196 5071</a>
          <p className="address">Corso Sclopis 6, Torino · Zona Valentino</p>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Nome e cognome" />
          <input placeholder="Email o telefono" />
          <input placeholder="Date o periodo indicativo" />
          <select defaultValue="">
            <option value="" disabled>Tipo di richiesta</option>
            <option>Disponibilità per soggiorno</option>
            <option>Collaborazione agenzia</option>
            <option>Richiesta per cliente</option>
            <option>Altro</option>
          </select>
          <textarea placeholder="Messaggio" />
          <button type="submit">Invia richiesta</button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
