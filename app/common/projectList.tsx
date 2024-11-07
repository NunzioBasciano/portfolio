export const projectList = [
  {
    id: '1',
    title: 'Inventory Management',
    subTitle:
      'Soluzione scalabile per la gestione degli inventari e delle vendite',
    icon: '/SicilyPulse.jpg',
    iconList: [
      { src: '/SicilyPulse.jpg', alt: 'SicilyPulse' },
      { src: '/SicilyPulse1.jpg', alt: 'SicilyPulse' },
      { src: '/SicilyPulse2.jpg', alt: 'SicilyPulse' },
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
    id: '3',
    title: 'myProduct',
    subTitle: "Gestione completa dei prodotti in un'interfaccia web intuitiva",
    icon: '/myProductIcon.jpg', // Assicurati di avere un'icona appropriata
    iconList: [
      { src: '/myProductIcon.jpg', alt: 'myProduct Icon' },
      { src: '/myProductFeature1.jpg', alt: 'myProduct Feature 1' },
      { src: '/myProductFeature2.jpg', alt: 'myProduct Feature 2' },
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
];
