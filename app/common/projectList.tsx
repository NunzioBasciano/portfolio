export const projectList = [
  {
    id: '1',
    title: 'Inventory Management',
    subTitle:
      'Soluzione scalabile per la gestione degli inventari e delle vendite',
    icon: '/inventory-management-1.png',
    iconList: [
      { src: '/inventory-management-1.png', alt: '' },
      { src: '/inventory-management-2.png', alt: 'SicilyPulse' },
      { src: '/inventory-management-3.png', alt: 'SicilyPulse' },
    ],
    technologies: [
      { id: '8', title: 'Next', src: '/next.png' },
      { id: '3', title: 'Tailwind', src: '/tailwind.png' },
      { id: '11', title: 'PostgreSQL', src: '/postgresql.png' },
      { id: '12', title: 'AWS', src: '/AWS.png' },
      { id: '13', title: 'Redux Toolkit', src: '/redux.png' },
      { id: '14', title: 'Material UI Data Grid', src: '/material.png' },
      { id: '15', title: 'Node.js', src: '/node.png' },
      { id: '16', title: 'Prisma', src: '/prisma.png' },
      { id: '17', title: 'Nodemon', src: '/nodemon.png' },
    ],
    paragraphs: [
      {
        text: '',
        keywords: [
          {
            keyword: 'Inventory Management ',
            after: 'è una moderna app web per la ',
          },
          {
            keyword: 'gestione di inventari ',
            after: 'e ',
          },
          {
            keyword: 'vendite',
            after: ' sviluppata con ',
          },
          {
            keyword: 'Next.js',
            after: ' e ',
          },
          {
            keyword: 'Node.js',
            after: '. Ottimizzata con ',
          },
          {
            keyword: 'Prisma ORM',
            after: ', ',
          },
          {
            keyword: 'AWS RDS',
            after: ' e ',
          },
          {
            keyword: 'Redux Toolkit ',
            after: 'per garantire ',
          },
          {
            keyword: 'scalabilità ',
            after: 'e ',
          },
          {
            keyword: 'prestazioni elevate',
            after: '.',
          },
        ],
      },
    ],
    description: `<div className="color-white">
  <p>
    <strong>Inventory Management</strong> è un'applicazione web moderna e scalabile per la gestione degli inventari e delle vendite, sviluppata utilizzando <strong>Next.js</strong> per il frontend e <strong>Node.js</strong> per il backend.<br />
     L'app offre una <strong>dashboard interattiva</strong> con panoramiche di vendite, prodotti popolari e riepiloghi delle spese, permettendo una gestione completa ed efficiente dell'inventario e degli acquisti. <br />
     Utilizzando <strong>Prisma ORM</strong>  l'app si interfaccia con un database <strong>PostgreSQL</strong> ospitato su <strong>AWS RDS</strong> garantendo elevate performance e sicurezza. <br />
     Il backend è ospitato su <strong>AWS EC2</strong>, mentre il frontend è distribuito tramite <strong>AWS Amplify</strong> per una scalabilità ottimale. <br />
     <strong>Tailwind CSS</strong> e <strong>Material UI Data Grid </strong>sono utilizzati per uno stile moderno e una gestione efficiente dei dati tabellari.<br />
    Grazie a <strong>Redux Toolkit </strong>l'app gestisce lo stato globale in modo efficace, integrando <strong>AWS S3 </strong>e l'infrastruttura cloud di <strong>AWS</strong> garantisce l'ottimizzazione delle risorse.
    `,
  },

  {
    id: '2',
    title: 'myProduct',
    subTitle: "Gestione completa dei prodotti in un'interfaccia web intuitiva",
    icon: '/myProduct-3.png', // Assicurati di avere un'icona appropriata
    iconList: [
      { src: '/myProduct-1.png', alt: 'myProduct Feature Create' },
      { src: '/myProduct-2.png', alt: 'myProduct Feature 2 Edit' },
      { src: '/myProduct-3.png', alt: 'myProduct Feature 3 Detail' },
    ],
    technologies: [
      { id: '7', title: 'React', src: '/ReactJS.png' },
      { id: '5', title: 'CSS', src: '/css.png' },
      { id: '15', title: 'Node.js', src: '/node.png' },
    ],
    paragraphs: [
      {
        text: '',
        keywords: [
          {
            keyword: 'myProduct',
            after: " è un'applicazione web per la ",
          },
          {
            keyword: 'gestione di prodotti',
            after: ', consentendo agli utenti di ',
          },
          {
            keyword: 'visualizzare',
            after: ', ',
          },
          {
            keyword: 'filtrare',
            after: ', ',
          },
          {
            keyword: 'modificare',
            after: ' e ',
          },
          {
            keyword: 'eliminare',
            after: ' prodotti in modo efficiente.',
          },
          {
            keyword: 'React',
            after: " è usato per costruire l'interfaccia, mentre ",
          },
          {
            keyword: 'React Router',
            after: ' gestisce la navigazione tra le pagine.',
          },
        ],
      },
    ],
    description: `<div className="color-white">
  <p>
    <strong>MyProduct</strong> è una soluzione completa e intuitiva per la gestione dei prodotti, costruita con <strong>React</strong> per il frontend e <strong>Node.js</strong> per il backend.
  </p>
  <ul>
    <li><strong>React Toastify</strong> è integrato per mostrare notifiche di successo e di errore, migliorando l'esperienza utente.</li>
    <li><strong>CSS</strong> è impiegato per fornire uno stile accattivante e una struttura responsive all'interfaccia utente.</li>
    <li><strong>Dashboard interattiva</strong> permette agli utenti di avere una visione completa dei prodotti, monitorando quantità, prezzi e disponibilità, rendendo la gestione dell'inventario semplice e veloce.</li>
    <li><strong>Filtri avanzati</strong> consentono di cercare prodotti per nome, marca o codice a barre, facilitando la localizzazione e la gestione di articoli specifici.</li>
    <li><strong>Funzionalità di editing</strong> permettono di modificare i dettagli del prodotto, come il nome, il prezzo e la quantità, garantendo un aggiornamento costante dell'inventario.</li>
    <li><strong>Notifiche in tempo reale</strong> attraverso React Toastify, per informare gli utenti su modifiche riuscite, errori o aggiornamenti dell'inventario.</li>
    <li><strong>Interfaccia semplice e intuitiva</strong> permette agli utenti di navigare facilmente tra le diverse sezioni e completare operazioni senza problemi.</li>
    <li><strong>Efficienza e usabilità</strong> migliorano grazie all'uso di componenti React modulari e riutilizzabili, riducendo i tempi di caricamento e ottimizzando l'interazione utente.</li>
    </ul>
  </div>
    `,
  },
  {
    id: '3',
    title: 'Simple-Contacts-Book',
    subTitle:
      "Gestione semplice ed efficiente di una rubrica contatti con un'interfaccia user-friendly",
    icon: '/simple-contacts-book-3.png', // Assicurati di avere un'icona appropriata
    iconList: [
      { src: '/simple-contacts-book-1.png', alt: 'Simple Contacts Icon' },
      { src: '/simple-contacts-book-2.png', alt: 'Aggiunta Contatto' },
      { src: '/simple-contacts-book-3.png', alt: 'Modifica Contatto' },
    ],
    technologies: [
      { id: '8', title: 'Next.js', src: '/next.png' },
      { id: '6', title: 'TypeScript', src: '/TypeScript.png' },
      { id: '9', title: 'MongoDB', src: '/MongoDB.png' },
      { id: '3', title: 'Tailwind CSS', src: '/tailwind.png' },
    ],
    paragraphs: [
      {
        text: '',
        keywords: [
          {
            keyword: 'Simple Contacts Book',
            after: " è un'applicazione web progettata per una ",
          },
          {
            keyword: 'gestione semplice e intuitiva',
            after: ' dei contatti, consentendo agli utenti di ',
          },
          {
            keyword: 'aggiungere',
            after: ', ',
          },
          {
            keyword: 'modificare',
            after: ', ',
          },
          {
            keyword: 'eliminare',
            after: ' e ',
          },
          {
            keyword: 'visualizzare',
            after: ' contatti in modo rapido ed efficace.',
          },
        ],
      },
    ],
    description: `<div className="color-white">
  <p>
    <strong>Simple Contacts Book</strong> è una soluzione avanzata per la gestione dei contatti, sviluppata con <strong>Next.js</strong> e <strong>TypeScript</strong>.
  </p>
  <ul>
    <li><strong>Visualizzazione dei contatti</strong>: Un elenco interattivo per consultare tutti i contatti in archivio.</li>
    <li><strong>Aggiunta di nuovi contatti</strong>: Un modulo dedicato per inserire nome, cognome, email e numero di telefono.</li>
    <li><strong>Modifica dei contatti</strong>: Interfaccia intuitiva per aggiornare le informazioni già salvate.</li>
    <li><strong>Cancellazione sicura</strong>: Conferma tramite modal per prevenire eliminazioni accidentali.</li>
    <li><strong>Ricerca e filtri</strong>: Trova contatti per nome, cognome o email, con opzioni di ordinamento avanzato.</li>
    <li><strong>Responsive design</strong>: Progettato per adattarsi perfettamente a qualsiasi dispositivo, desktop o mobile.</li>
    <li><strong>Efficienza</strong>: Utilizzo di <strong>MongoDB</strong> per gestire i dati in modo scalabile e <strong>Tailwind CSS</strong> per una UI moderna e responsiva.</li>
  </ul>
  </div>`,
  },
  {
    id: '4',
    title: 'AI Story Teller',
    subTitle:
      "Generazione di storie personalizzate con l'intelligenza artificiale",
    icon: '/ai-story-teller-1.png', // Assicurati di avere un'icona rappresentativa
    iconList: [
      { src: '/ai-story-teller-1.png', alt: 'AI Story Teller esempio storia' },
      {
        src: '/ai-story-teller-2.png',
        alt: 'funzionalità domande di comprensione',
      },
      { src: '/ai-story-teller-3.png', alt: 'Preferiti' },
    ],
    technologies: [
      { id: '8', title: 'Next.js', src: '/next.png' },
      { id: '6', title: 'TypeScript', src: '/typescript.png' },
      { id: '12', title: 'Google Gemini', src: '/gemini.png' },
    ],
    paragraphs: [
      {
        text: '',
        keywords: [
          {
            keyword: 'AI Story Teller',
            after: " è un'applicazione web che utilizza ",
          },
          {
            keyword: 'intelligenza artificiale',
            after: ' per generare ',
          },
          {
            keyword: 'storie personalizzate',
            after: ' in base alle ',
          },
          {
            keyword: 'parole chiave',
            after: " fornite dall'utente. Gli utenti possono anche ",
          },
          {
            keyword: 'ascoltare',
            after: ' le storie attraverso la funzione di ',
          },
          {
            keyword: 'sintesi vocale',
            after: ', rispondere a domande di ',
          },
          {
            keyword: 'comprensione',
            after: ' e ricevere ',
          },
          {
            keyword: 'feedback immediato',
            after: " grazie all'analisi di ",
          },
          {
            keyword: 'Google Gemini',
            after: '.',
          },
        ],
      },
    ],
    description: `<div className="color-white">
    <p>
      <strong>AI Story Teller</strong> è un'app rivoluzionaria che sfrutta <strong>Google Gemini</strong> per creare storie personalizzate. Progettata con <strong>Next.js</strong> e <strong>TypeScript</strong>, offre un'interfaccia user-friendly e funzionalità avanzate come la sintesi vocale e la verifica delle risposte.
    </p>
    <ul>
      <li><strong>Storie personalizzate</strong>: Genera racconti unici basati su parole chiave e genere scelto dall'utente.</li>
      <li><strong>Sintesi vocale</strong>: Consente di ascoltare le storie generate direttamente dall'app.</li>
      <li><strong>Domande di comprensione</strong>: Testa la tua comprensione rispondendo a domande analizzate tramite <strong>Google Gemini</strong>.</li>
      <li><strong>Design intuitivo</strong>: Un'interfaccia responsiva, semplice e accattivante per una migliore esperienza utente.</li>
      <li><strong>Salvataggio delle storie</strong>: Archivia le storie preferite per accedervi in futuro.</li>
      <li><strong>Analisi delle risposte</strong>: Fornisce un feedback accurato grazie alle capacità avanzate dell'intelligenza artificiale.</li>
    </ul>
    </div>`,
  },
  {
    id: '5',
    title: 'SicilyPulse',
    subTitle:
      'La piattaforma che cattura il cuore culturale della Sicilia, offrendo eventi, esperienze e molto altro',
    icon: '/sicilyPulse-1.png', // Assicurati di avere un'icona appropriata
    iconList: [
      { src: '/sicilyPulse-1.png', alt: 'SicilyPulse Home' },
      { src: '/sicilyPulse-2.png', alt: 'Funzionalità Proponi Evento' },
      { src: '/sicilyPulse-3.png', alt: 'Dashboard Admin' },
    ],
    technologies: [
      { id: '8', title: 'Next.js', src: '/next.png' },
      { id: '15', title: 'TypeScript', src: '/TypeScript.png' },
      { id: '16', title: 'Firebase', src: '/Firebase.png' },
      { id: '3', title: 'Tailwind CSS', src: '/tailwind.png' },
      { id: '18', title: 'GeminiAI API', src: '/GeminiAI.png' },
      { id: '9', title: 'MongoDB', src: '/mongoDB.png' },
    ],
    paragraphs: [
      {
        text: '',
        keywords: [
          {
            keyword: 'SicilyPulse',
            after: ' è una piattaforma digitale che cattura il ',
          },
          {
            keyword: 'battito culturale',
            after: ' della Sicilia, offrendo una ',
          },
          {
            keyword: 'esperienza personalizzata',
            after: ' per scoprire eventi, attività e attrazioni locali. ',
          },
          {
            keyword: 'Next.js',
            after: " alimenta l'applicazione con un ",
          },
          {
            keyword: 'rendering rapido ed efficiente',
            after: ', mentre ',
          },
          {
            keyword: 'Firebase',
            after: " gestisce l'autenticazione e il database con sicurezza.",
          },
        ],
      },
    ],
    description: `<div className="color-white">
    <p>
      <strong>SicilyPulse</strong> è una piattaforma che rivoluziona la scoperta di <strong>eventi</strong>, <strong>attività culturali</strong>, <strong>esperienze culinarie</strong> e molto altro, progettata con tecnologie moderne come <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Firebase</strong> e <strong>GeminiAI</strong>.
    </p>
    <ul>
      <li><strong>Eventi e attività</strong>: Scopri eventi culturali, esperienze uniche e attività locali organizzate in categorie intuitive.</li>
      <li><strong>Gestione profilo</strong>: Personalizza la tua esperienza utente e visualizza i tuoi eventi preferiti.</li>
      <li><strong>Prenotazione semplice</strong>: Sistema di prenotazione con selezione di data, orario e numero di biglietti.</li>
      <li><strong>Proponi evento</strong>: Gli utenti possono proporre nuovi eventi con descrizioni dettagliate e tag categorizzati.</li>
      <li><strong>Pannello di controllo admin</strong>: Gli amministratori possono approvare contenuti generati dagli utenti grazie all'integrazione con <strong>GeminiAI</strong>.</li>
      <li><strong>Responsive design</strong>: Un'interfaccia elegante e moderna, progettata per essere utilizzata su qualsiasi dispositivo.</li>
      <li><strong>Sicurezza e scalabilità</strong>: Utilizzo di <strong>Firebase</strong> per garantire l'integrità dei dati e un'ottima gestione degli utenti.</li>
    </ul>
    </div>`,
  },
];
