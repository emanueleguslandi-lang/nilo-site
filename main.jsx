import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './styles.css';

import logo from './nilo-logo.png';
import suite1Living from './suite-1-living.jpg';
import suite1BedroomMain from './suite-1-bedroom-main.jpg';
import suite1BedroomTwin from './suite-1-bedroom-twin.jpg';
import suite1Dining from './suite-1-dining.jpg';
import suite1Kitchen from './suite-1-kitchen.jpg';
import suite1Bathroom from './suite-1-bathroom.jpg';
import suite1BedroomView from './suite-1-bedroom-view.jpg';

const apartments = [
  {
    name: 'NILO Suite I',
    size: '180 m²',
    meta: {
      it: '3 camere · 3 bagni · fino a 8 ospiti',
      en: '3 bedrooms · 3 bathrooms · up to 8 guests',
      fr: '3 chambres · 3 salles de bain · jusqu’à 8 voyageurs'
    },
    text: {
      it: 'La soluzione più ampia di NILO: spazi generosi, tre camere, tre bagni e ambienti pensati per famiglie, professionisti e soggiorni prolungati.',
      en: 'The largest NILO solution: generous spaces, three bedrooms, three bathrooms and rooms designed for families, professionals and extended stays.',
      fr: 'La solution la plus spacieuse de NILO : de grands espaces, trois chambres, trois salles de bain et des pièces pensées pour les familles, les professionnels et les séjours prolongés.'
    },
    image: suite1Living
  },
  {
    name: 'NILO Suite II',
    size: '160 m²',
    meta: {
      it: '3 camere · 3 bagni · fino a 6 ospiti',
      en: '3 bedrooms · 3 bathrooms · up to 6 guests',
      fr: '3 chambres · 3 salles de bain · jusqu’à 6 voyageurs'
    },
    text: {
      it: 'Un appartamento ampio, elegante e confortevole, pensato per permanenze brevi o prolungate.',
      en: 'A spacious, elegant and comfortable apartment designed for short or extended stays.',
      fr: 'Un appartement spacieux, élégant et confortable, conçu pour les séjours courts ou prolongés.'
    },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'NILO Studio',
    size: '30 m²',
    meta: {
      it: 'massimo 2 ospiti',
      en: 'up to 2 guests',
      fr: 'jusqu’à 2 voyageurs'
    },
    text: {
      it: 'Uno studio riservato e funzionale, ideale per soggiorni individuali o di coppia, con la stessa cura e lo stesso contesto delle suite NILO.',
      en: 'A private and functional studio, ideal for individual or couple stays, with the same care and setting as the NILO suites.',
      fr: 'Un studio réservé et fonctionnel, idéal pour les séjours individuels ou en couple, avec le même soin et le même contexte que les suites NILO.'
    },
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
  }
];

const suiteOneImages = [
  suite1Living,
  suite1BedroomMain,
  suite1BedroomTwin,
  suite1Dining,
  suite1Kitchen,
  suite1Bathroom,
  suite1BedroomView
];

const reviews = [
  {
    author: 'Cecile',
    label: { it: 'Ospite Airbnb', en: 'Airbnb guest', fr: 'Voyageuse Airbnb' },
    text: 'Our stay was fantastic! The location is just amazing, right across from beautiful Valentino Park. The apartment is very spacious and luxurious, fully equipped with all amenities. The hosts were super warm and welcoming.'
  },
  {
    author: 'John',
    label: { it: 'Ospite Airbnb', en: 'Airbnb guest', fr: 'Voyageur Airbnb' },
    text: 'Great location with stunning views. The whole apartment was beautiful and very clean.'
  },
  {
    author: 'Savino',
    label: { it: 'Ospite Airbnb', en: 'Airbnb guest', fr: 'Voyageur Airbnb' },
    text: 'Appartamento luminoso e davvero di lusso, come in foto se non meglio. Vista dalla camera sul parco meravigliosa. Soggiorno perfetto e host molto disponibili, ottima comunicazione.'
  }
];

const dictionary = {
  it: {
    nav: ['Posizione', 'Suite', 'Servizi', 'Partner', 'Contatti'],
    logoLine: 'Torino · Corso Federico Sclopis 6 · 10126',
    eyebrow: 'Torino · Corso Federico Sclopis 6 · 10126',
    heroTitle: 'Tre soluzioni private nel cuore del Valentino, tra spazio, verde e quiete.',
    heroText: 'NILO Luxury Accommodations offre due grandi suite e un monolocale curato a Torino, con vista sulla Fontana dei Dodici Mesi del Valentino. Una proposta pensata per chi cerca ospitalità calda, qualità, tranquillità e una gestione affidabile anche per soggiorni lunghi.',
    call: 'Chiama ora',
    agencies: 'Per agenzie',
    verified: 'Recensione verificata Airbnb',

    locationEyebrow: 'La posizione',
    locationTitle: 'Valentino, Torino. Una cornice che parla da sola.',
    locationText: 'In Corso Federico Sclopis 6, NILO si trova in una delle zone più eleganti e riconoscibili di Torino: il Valentino. Verde, tranquillità, collegamenti comodi e vicinanza al centro rendono la posizione ideale sia per soggiorni di piacere sia per esigenze professionali.',
    locationCards: [
      'Corso Federico Sclopis 6, 10126 Torino',
      'Zona Valentino',
      'Vista sulla Fontana dei Dodici Mesi',
      'Ben collegata al centro e alla metro',
      'Zona tranquilla e ben frequentata',
      'Verde e quiete nel cuore della città'
    ],
    arrival: 'Come arrivare',
    portaNuova: 'Da Porta Nuova',
    portaNuovaText: 'Bus 67 verso zona Valentino, con fermata nelle vicinanze. In alternativa, metro M1 fino a Dante e breve passeggiata.',
    portaNuovaTime: '15–20 min indicativi',
    portaSusa: 'Da Porta Susa',
    portaSusaText: 'Metro M1 fino a Dante, poi circa 12 minuti a piedi verso Corso Federico Sclopis 6.',
    portaSusaTime: '20–25 min indicativi',

    promiseEyebrow: 'La nostra promessa',
    promiseTitle: 'Un servizio che parla attraverso i dettagli.',
    values: [
      ['Affidabilità', 'Tre soluzioni nello stesso palazzo, gestione diretta e comunicazione chiara: una proposta semplice da valutare anche per agenzie e partner.'],
      ['Ospitalità calda', 'Ambienti eleganti, attenzione al dettaglio e disponibilità reale verso ogni ospite.'],
      ['Disponibilità', 'Risposte rapide e supporto pratico prima, durante e dopo la permanenza.']
    ],

    suiteEyebrow: 'Le suite',
    suiteTitle: 'Tre spazi privati, un’unica esperienza NILO.',
    suiteIntro: 'La forza di NILO è la chiarezza della proposta: due appartamenti ampi, uno studio per massimo due persone, servizi completi, vista sul Valentino e una gestione pensata per offrire continuità, fiducia e qualità.',
    garden: 'Il giardino è condiviso tra le tre unità NILO: uno spazio raccolto e riservato, pensato per offrire un momento di quiete e verde nel cuore della città.',

    servicesEyebrow: 'Servizi',
    servicesTitle: 'Servizi pensati per soggiorni senza pensieri.',
    servicesText: 'Ogni appartamento è pensato per offrire autonomia, comodità e una permanenza serena, sia per soggiorni brevi sia per esigenze professionali o temporanee.',
    services: [
      'Wi-Fi',
      'Cucina attrezzata',
      'Pulizia professionale',
      'Lavatrice',
      'Giardino condiviso',
      'Parcheggi nelle vicinanze',
      'Metro e centro facilmente raggiungibili',
      'Tre unità nello stesso stabile',
      'Adatto a soggiorni prolungati',
      'Vista sul Valentino'
    ],

    partnerEyebrow: 'Per agenzie e partner',
    partnerTitle: 'Una soluzione chiara per chi cerca case affidabili a Torino.',
    partnerText: 'NILO è già presente sulle principali piattaforme di affitto breve, ma nasce anche per creare relazioni dirette con agenzie e realtà che cercano appartamenti curati per clienti, professionisti, trasferte o soggiorni temporanei.',
    stats: ['Soluzioni nello stesso palazzo', 'Gestione unica e diretta', 'Zona Valentino, vicino al centro'],

    contactEyebrow: 'Contatti',
    contactTitle: 'Contattaci per disponibilità e collaborazioni.',
    contactText: 'Contattaci per disponibilità, collaborazioni con agenzie o richieste dedicate. Ti risponderemo con una proposta chiara e adatta al tipo di soggiorno.',
    form: ['Nome e cognome', 'Email o telefono', 'Date o periodo indicativo', 'Tipo di richiesta', 'Disponibilità per soggiorno', 'Collaborazione agenzia', 'Richiesta per cliente', 'Altro', 'Messaggio', 'Invia richiesta'],
    formNote: 'Ti risponderemo il prima possibile. Per richieste urgenti, contattaci telefonicamente.'
  },

  en: {
    nav: ['Location', 'Suites', 'Services', 'Partners', 'Contact'],
    logoLine: 'Turin · Corso Federico Sclopis 6 · 10126',
    eyebrow: 'Turin · Corso Federico Sclopis 6 · 10126',
    heroTitle: 'Three private stays in the heart of Valentino, surrounded by space, greenery and calm.',
    heroText: 'NILO Luxury Accommodations offers two large suites and a refined studio in Turin, with views of the Fontana dei Dodici Mesi in Valentino. A proposal designed for guests seeking warm hospitality, quality, calm and reliable management, also for long stays.',
    call: 'Call now',
    agencies: 'For agencies',
    verified: 'Verified Airbnb review',

    locationEyebrow: 'Location',
    locationTitle: 'Valentino, Turin. A setting that speaks for itself.',
    locationText: 'Located in Corso Federico Sclopis 6, NILO sits in one of Turin’s most elegant and recognisable areas: Valentino. Greenery, calm, convenient connections and proximity to the city centre make the location ideal for both leisure stays and professional needs.',
    locationCards: [
      'Corso Federico Sclopis 6, 10126 Turin',
      'Valentino area',
      'View of the Fontana dei Dodici Mesi',
      'Well connected to the centre and metro',
      'Quiet and well-regarded area',
      'Greenery and calm in the city'
    ],
    arrival: 'How to arrive',
    portaNuova: 'From Porta Nuova',
    portaNuovaText: 'Bus 67 towards the Valentino area, with a nearby stop. Alternatively, metro M1 to Dante followed by a short walk.',
    portaNuovaTime: 'Approx. 15–20 min',
    portaSusa: 'From Porta Susa',
    portaSusaText: 'Metro M1 to Dante, then about 12 minutes on foot to Corso Federico Sclopis 6.',
    portaSusaTime: 'Approx. 20–25 min',

    promiseEyebrow: 'Our promise',
    promiseTitle: 'A service expressed through details.',
    values: [
      ['Reliability', 'Three solutions in the same building, direct management and clear communication: simple to evaluate for agencies and partners.'],
      ['Warm hospitality', 'Elegant spaces, attention to detail and genuine availability for every guest.'],
      ['Availability', 'Quick replies and practical support before, during and after the stay.']
    ],

    suiteEyebrow: 'The suites',
    suiteTitle: 'Three private spaces, one NILO experience.',
    suiteIntro: 'NILO’s strength is the clarity of its offer: two spacious apartments, one studio for up to two guests, complete services, views of Valentino and management designed to provide continuity, trust and quality.',
    garden: 'The garden is shared between the three NILO units: a reserved and intimate space designed to offer a moment of calm and greenery in the heart of the city.',

    servicesEyebrow: 'Services',
    servicesTitle: 'Services designed for worry-free stays.',
    servicesText: 'Each apartment is designed to offer autonomy, comfort and a peaceful stay, for both short visits and professional or temporary needs.',
    services: [
      'Wi-Fi',
      'Equipped kitchen',
      'Professional cleaning',
      'Washing machine',
      'Shared garden',
      'Parking nearby',
      'Metro and centre easily reachable',
      'Three units in the same building',
      'Suitable for extended stays',
      'Valentino view'
    ],

    partnerEyebrow: 'For agencies and partners',
    partnerTitle: 'A clear solution for those seeking reliable homes in Turin.',
    partnerText: 'NILO is already present on the main short-rental platforms, but also aims to build direct relationships with agencies and companies seeking curated apartments for clients, professionals, business trips or temporary stays.',
    stats: ['Solutions in the same building', 'Single direct management', 'Valentino area, close to the centre'],

    contactEyebrow: 'Contact',
    contactTitle: 'Contact us for availability and collaborations.',
    contactText: 'Contact us for availability, agency collaborations or dedicated requests. We will reply with a clear proposal suited to the type of stay.',
    form: ['Full name', 'Email or phone', 'Approximate dates or period', 'Request type', 'Stay availability', 'Agency collaboration', 'Client request', 'Other', 'Message', 'Send request'],
    formNote: 'We will reply as soon as possible. For urgent requests, please contact us by phone.'
  },

  fr: {
    nav: ['Emplacement', 'Suites', 'Services', 'Partenaires', 'Contact'],
    logoLine: 'Turin · Corso Federico Sclopis 6 · 10126',
    eyebrow: 'Turin · Corso Federico Sclopis 6 · 10126',
    heroTitle: 'Trois séjours privés au cœur du Valentino, entre espace, verdure et calme.',
    heroText: 'NILO Luxury Accommodations propose deux grandes suites et un studio soigné à Turin, avec vue sur la Fontana dei Dodici Mesi du Valentino. Une proposition pensée pour ceux qui recherchent une hospitalité chaleureuse, la qualité, le calme et une gestion fiable, même pour les longs séjours.',
    call: 'Appeler',
    agencies: 'Pour agences',
    verified: 'Avis vérifié Airbnb',

    locationEyebrow: 'Emplacement',
    locationTitle: 'Valentino, Turin. Un cadre qui parle de lui-même.',
    locationText: 'Situé au Corso Federico Sclopis 6, NILO se trouve dans l’un des quartiers les plus élégants et reconnaissables de Turin : le Valentino. Verdure, tranquillité, liaisons pratiques et proximité du centre rendent l’emplacement idéal pour les séjours de loisirs comme pour les besoins professionnels.',
    locationCards: [
      'Corso Federico Sclopis 6, 10126 Turin',
      'Quartier Valentino',
      'Vue sur la Fontana dei Dodici Mesi',
      'Bien relié au centre et au métro',
      'Quartier calme et bien fréquenté',
      'Verdure et tranquillité en ville'
    ],
    arrival: 'Comment arriver',
    portaNuova: 'Depuis Porta Nuova',
    portaNuovaText: 'Bus 67 vers le quartier Valentino, avec un arrêt à proximité. Sinon, métro M1 jusqu’à Dante puis courte promenade.',
    portaNuovaTime: 'Environ 15–20 min',
    portaSusa: 'Depuis Porta Susa',
    portaSusaText: 'Métro M1 jusqu’à Dante, puis environ 12 minutes à pied jusqu’au Corso Federico Sclopis 6.',
    portaSusaTime: 'Environ 20–25 min',

    promiseEyebrow: 'Notre promesse',
    promiseTitle: 'Un service qui se révèle dans les détails.',
    values: [
      ['Fiabilité', 'Trois solutions dans le même immeuble, gestion directe et communication claire : une proposition simple à évaluer pour les agences et partenaires.'],
      ['Hospitalité chaleureuse', 'Des espaces élégants, le souci du détail et une disponibilité réelle pour chaque invité.'],
      ['Disponibilité', 'Réponses rapides et soutien pratique avant, pendant et après le séjour.']
    ],

    suiteEyebrow: 'Les suites',
    suiteTitle: 'Trois espaces privés, une seule expérience NILO.',
    suiteIntro: 'La force de NILO est la clarté de son offre : deux grands appartements, un studio pour deux personnes maximum, des services complets, une vue sur le Valentino et une gestion pensée pour offrir continuité, confiance et qualité.',
    garden: 'Le jardin est partagé entre les trois unités NILO : un espace réservé et intime, pensé pour offrir un moment de calme et de verdure au cœur de la ville.',

    servicesEyebrow: 'Services',
    servicesTitle: 'Des services pensés pour des séjours sans souci.',
    servicesText: 'Chaque appartement est pensé pour offrir autonomie, confort et un séjour serein, aussi bien pour les courts séjours que pour les besoins professionnels ou temporaires.',
    services: [
      'Wi-Fi',
      'Cuisine équipée',
      'Nettoyage professionnel',
      'Lave-linge',
      'Jardin partagé',
      'Parkings à proximité',
      'Métro et centre facilement accessibles',
      'Trois unités dans le même immeuble',
      'Adapté aux séjours prolongés',
      'Vue sur le Valentino'
    ],

    partnerEyebrow: 'Pour agences et partenaires',
    partnerTitle: 'Une solution claire pour ceux qui cherchent des logements fiables à Turin.',
    partnerText: 'NILO est déjà présent sur les principales plateformes de location courte durée, mais souhaite aussi créer des relations directes avec les agences et structures recherchant des appartements soignés pour clients, professionnels, déplacements ou séjours temporaires.',
    stats: ['Solutions dans le même immeuble', 'Gestion unique et directe', 'Quartier Valentino, proche du centre'],

    contactEyebrow: 'Contact',
    contactTitle: 'Contactez-nous pour disponibilités et collaborations.',
    contactText: 'Contactez-nous pour disponibilités, collaborations avec agences ou demandes dédiées. Nous répondrons avec une proposition claire et adaptée au type de séjour.',
    form: ['Nom et prénom', 'Email ou téléphone', 'Dates ou période indicative', 'Type de demande', 'Disponibilité pour séjour', 'Collaboration agence', 'Demande pour client', 'Autre', 'Message', 'Envoyer la demande'],
    formNote: 'Nous répondrons dès que possible. Pour les demandes urgentes, contactez-nous par téléphone.'
  }
};

function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <div className="section-title">
      <p className="eyebrow-clean">{eyebrow}</p>
      <h2 className={`script ${light ? 'light' : ''}`}>{title}</h2>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('it');
  const [reviewIndex, setReviewIndex] = useState(0);
  const [suiteOneIndex, setSuiteOneIndex] = useState(0);
  const t = dictionary[lang];
  const review = reviews[reviewIndex];

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <a className="logo" href="#top" aria-label="NILO Home">
            <img src={logo} alt="NILO Luxury Accommodations" />
          </a>

          <div className="nav-links">
            <a href="#posizione">{t.nav[0]}</a>
            <a href="#suite">{t.nav[1]}</a>
            <a href="#servizi">{t.nav[2]}</a>
            <a href="#partner">{t.nav[3]}</a>
            <a href="#contatti">{t.nav[4]}</a>
          </div>

          <div className="lang" aria-label="Language selector">
            {[
              ['it', '🇮🇹'],
              ['en', '🇬🇧'],
              ['fr', '🇫🇷']
            ].map(([code, flag]) => (
              <button key={code} type="button" onClick={() => setLang(code)} className={lang === code ? 'active' : ''}>{flag}</button>
            ))}
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="script">{t.heroTitle}</h1>
            <p className="lead">{t.heroText}</p>
            <div className="actions">
              <a className="btn primary" href="tel:+393931965071">{t.call}</a>
              <a className="btn secondary" href="#partner">{t.agencies}</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <div
                className="hero-photo-inner"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,.84), rgba(0,0,0,.18)), url(${suite1Living})`
                }}
              >
                <div className="review-card">
                  <p className="stars">★★★★★</p>
                  <p className="review-text">“{review.text}”</p>
                  <div className="review-bottom">
                    <div>
                      <p className="review-author">— {review.author}</p>
                      <p className="review-label">{review.label[lang]} · {t.verified}</p>
                    </div>
                    <div className="arrows">
                      <button type="button" onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)}>←</button>
                      <button type="button" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}>→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mixed" id="posizione">
        <div className="container section-grid">
          <div>
            <SectionTitle eyebrow={t.locationEyebrow} title={t.locationTitle} />
            <p className="section-copy">{t.locationText}</p>
          </div>
          <div className="cards">
            {t.locationCards.map((item) => (
              <article className="mini-card" key={item}>
                <div className="gold-line" />
                <p className="script">{item}</p>
              </article>
            ))}
            <article className="arrival">
              <p className="eyebrow-clean">{t.arrival}</p>
              <div className="arrival-grid">
                <div className="arrival-card">
                  <h3 className="script">{t.portaNuova}</h3>
                  <p>{t.portaNuovaText}</p>
                  <strong>{t.portaNuovaTime}</strong>
                </div>
                <div className="arrival-card">
                  <h3 className="script">{t.portaSusa}</h3>
                  <p>{t.portaSusaText}</p>
                  <strong>{t.portaSusaTime}</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section promise">
        <div className="container">
          <SectionTitle eyebrow={t.promiseEyebrow} title={t.promiseTitle} light />
          <div className="promise-cards">
            {t.values.map(([title, text]) => (
              <article className="promise-card" key={title}>
                <div className="gold-line" />
                <h3 className="script">{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section suite-section" id="suite">
        <div className="container">
          <div className="suite-title">
            <p className="eyebrow-clean">{t.suiteEyebrow}</p>
            <h2 className="script">{t.suiteTitle}</h2>
          </div>
          <div className="suite-intro">
            <p>{t.suiteIntro}</p>
          </div>

          <div className="suite-grid">
            {apartments.map((apt) => {
              const isSuiteOne = apt.name === 'NILO Suite I';
              const image = isSuiteOne ? suiteOneImages[suiteOneIndex] : apt.image;
              return (
                <article className="suite-card" key={apt.name}>
                  <div className="suite-photo" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.05)), url("${image}")` }}>
                    {isSuiteOne && (
                      <div className="gallery-bar">
                        <button type="button" onClick={() => setSuiteOneIndex((suiteOneIndex - 1 + suiteOneImages.length) % suiteOneImages.length)}>←</button>
                        <div className="gallery-title">
                          <p>NILO Suite I · 180 m²</p>
                          <small>{suiteOneIndex + 1} / {suiteOneImages.length}</small>
                        </div>
                        <button type="button" onClick={() => setSuiteOneIndex((suiteOneIndex + 1) % suiteOneImages.length)}>→</button>
                      </div>
                    )}
                  </div>
                  <div className="suite-content">
                    <p className="size script">{apt.size}</p>
                    <h3 className="script">{apt.name}</h3>
                    <p className="meta">{apt.meta[lang]}</p>
                    <p>{apt.text[lang]}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="garden-note">{t.garden}</div>
        </div>
      </section>

      <section className="section services" id="servizi">
        <div className="container">
          <div className="service-panel">
            <div>
              <SectionTitle eyebrow={t.servicesEyebrow} title={t.servicesTitle} light />
              <p className="service-copy">{t.servicesText}</p>
            </div>
            <div className="service-list">
              {t.services.map((service) => (
                <div className="service-item" key={service}>
                  <span className="dot" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section partner" id="partner">
        <div className="container section-grid">
          <div>
            <SectionTitle eyebrow={t.partnerEyebrow} title={t.partnerTitle} />
            <p className="section-copy">{t.partnerText}</p>
          </div>
          <div className="stats">
            <div className="stat"><strong className="script">3</strong><span>{t.stats[0]}</span></div>
            <div className="stat"><strong className="script">1</strong><span>{t.stats[1]}</span></div>
            <div className="stat"><strong className="script">Torino</strong><span>{t.stats[2]}</span></div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contatti">
        <div className="container contact-grid">
          <div>
            <SectionTitle eyebrow={t.contactEyebrow} title={t.contactTitle} light />
            <p className="contact-copy">{t.contactText}</p>
            <div className="contact-list">
              <a href="tel:+393931965071">+39 393 196 5071</a>
              <a href="mailto:info@niloaccomodation.com">info@niloaccomodation.com</a>
              <p>Corso Federico Sclopis 6, 10126 Torino · Zona Valentino</p>
            </div>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input placeholder={t.form[0]} />
            <input placeholder={t.form[1]} />
            <input placeholder={t.form[2]} />
            <select defaultValue="">
              <option value="" disabled>{t.form[3]}</option>
              <option>{t.form[4]}</option>
              <option>{t.form[5]}</option>
              <option>{t.form[6]}</option>
              <option>{t.form[7]}</option>
            </select>
            <textarea placeholder={t.form[8]} />
            <button type="submit">{t.form[9]}</button>
            <p className="form-note">{t.formNote}</p>
          </form>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
