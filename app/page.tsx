import ArticleGenerator from "./components/ArticleGenerator";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import MainLayout from "./components/MainLayout";
import { homeArticle } from "./common/homeArticle";

export default function Home() {
  return (
    <MainLayout>
      <ArticleGenerator
        mainTitle={homeArticle.mainTitle}
        subTitle={homeArticle.subtitle}
        paragraphs={homeArticle.paragraphs}
      >
        <Button downloadCV={true} label="Scarica CV" />
        <Button link="/my-project" label="Progetti" />
        <Button link="/contact" label="Contatti" />
      </ArticleGenerator>
      <div className="py-4 px-6 flex flex-col gap-3 ">
        <h1 className="text-white text-2xl my-3 font-semibold">
          Nunzio Basciano
        </h1>
        <h2 className="text-3xl mb-2 text-[var(--orange)]">
          Sviluppatore Frontend
        </h2>

        <p className="tracking-wide">
          Sono uno <strong>sviluppatore frontend</strong> con attenzione ai
          dettagli e passione per funzionalità fluide e ottimizzate.
        </p>
        <p className="tracking-wide">
          Utilizzo <strong>HTML, CSS, JavaScript, ReactJS, Next.js</strong> per
          creare interfacce performanti, seguendo le migliori pratiche.
        </p>
        <p className="tracking-wide">
          Ho esperienza nella progettazione di <strong>web app</strong>{" "}
          ottimizzate per mobile e desktop, gestione di <strong>MongoDB</strong>{" "}
          e implementazione di CRUD, filtri dinamici e paginazione.
        </p>
        <p className="tracking-wide">
          Mi impegno costantemente a migliorare, unendo{" "}
          <strong>problem solving</strong> e spirito di squadra.
        </p>
        <div className="flex gap-3">
          <Button downloadCV={true} label="Scarica CV" />
          <Button link="/my-project" label="Progetti" />
          <Button link="/contact" label="Contatti" />
        </div>
      </div>
      <Carousel />
    </MainLayout>
  );
}
