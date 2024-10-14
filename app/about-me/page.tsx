import Image from "next/image";

function AboutMe() {
  return (
    <div className="py-3 md:flex md:gap-3 max-md:flex max-md:flex-col max-md:gap-3 justify-between">
      <div className="py-4 px-6 flex flex-col gap-3 w-full md:w-1/2 max-md:h-96 relative">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {" "}
          {/* Cambia a rounded-lg e overflow-hidden */}
          <Image
            src="/nunzioBasciano-foto.jpg"
            alt="Foto di Nunzio Basciano"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="py-4 px-6 flex flex-col gap-3 w-full md:w-1/2 min-h-[full] shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl">
        <h2 className="text-3xl mb-2 text-[var(--orange)]">
          Dalla Visione al Codice: Progettazione e Sviluppo Frontend
        </h2>
        <p>
          Sono <strong>Nunzio Basciano</strong>, sviluppatore frontend
          specializzato nella creazione di{" "}
          <strong>interfacce utente intuitive</strong> e{" "}
          <strong>performanti</strong>. Appassionato di{" "}
          <strong>tecnologia</strong> e <strong>design</strong>, mi concentro su{" "}
          <strong>esperienze utente (UX)</strong> fluide, con un'attenzione ai
          dettagli. Affronto ogni progetto con spirito{" "}
          <strong>proattivo</strong> e desiderio di apprendere nuove tecnologie.
        </p>
        <p>
          Considero il <strong>problem-solving</strong> un'opportunità per
          innovare. Ho lavorato in <strong>team dinamici</strong>, dove la{" "}
          <strong>comunicazione efficace</strong> è fondamentale per il
          successo.
        </p>
        <p>
          La mia <strong>adattabilità</strong> a nuovi ambienti mi consente di
          gestire <strong>progetti complessi</strong>. Mantengo un'attenzione
          elevata ai dettagli, curando ogni fase dello sviluppo, dall'
          <strong>ottimizzazione SEO</strong> alla{" "}
          <strong>user experience</strong>, per garantire{" "}
          <strong>soluzioni scalabili</strong> e <strong>performanti</strong>.
        </p>
        <p>
          Con uno <strong>spirito di iniziativa</strong>, partecipo attivamente
          a tutte le fasi del progetto, sviluppando{" "}
          <strong>competenze di leadership</strong> nella gestione di team e
          progetti.
        </p>
        <p>
          Grazie alla mia <strong>gestione del tempo</strong> e{" "}
          <strong>flessibilità</strong>, riesco a rispettare le scadenze senza
          compromettere la qualità. Questi elementi, uniti all'attenzione alle{" "}
          <strong>migliori pratiche di sviluppo web</strong> e{" "}
          <strong>SEO</strong>, mi permettono di creare{" "}
          <strong>soluzioni web efficaci</strong>.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
