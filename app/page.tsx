import Button from "./components/Button";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="py-3 md:flex gap-3 justify-between">
      <div className="py-4 px-6 flex flex-col gap-3 w-full min-h-[full] shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl">
        <h1 className="text-white text-2xl my-3 font-semibold">
          Nunzio Basciano
        </h1>
        <h2 className="text-3xl mb-2 text-[var(--orange)]">
          Sviluppatore Frontend
        </h2>
        <p className="tracking-wide">
          Sono uno{" "}
          <strong className="text-[var(--orange)]">
            sviluppatore frontend
          </strong>{" "}
          con attenzione ai dettagli e passione per funzionalità fluide e
          ottimizzate.
        </p>
        <p className="tracking-wide">
          Utilizzo{" "}
          <strong className="text-[var(--orange)]">
            HTML, CSS, JavaScript, ReactJS, Next.js
          </strong>{" "}
          per creare interfacce performanti, seguendo le migliori pratiche.
        </p>
        <p className="tracking-wide">
          Ho esperienza nella progettazione di{" "}
          <strong className="text-[var(--orange)]">web app</strong> ottimizzate
          per mobile e desktop, gestione di{" "}
          <strong className="text-[var(--orange)]">MongoDB</strong> e
          implementazione di CRUD, filtri dinamici e paginazione.
        </p>
        <p className="tracking-wide">
          Mi impegno costantemente a migliorare, unendo{" "}
          <strong className="text-[var(--orange)]">problem solving</strong> e
          spirito di squadra.
        </p>
        <div className="flex gap-3">
          <Button downloadCV={true} label="Scarica CV" />
          <Button link="/my-project" label="Progetti" />
          <Button link="/contact" label="Contatti" />
        </div>
      </div>
      <Carousel />
    </div>
  );
}
