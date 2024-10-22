import { homeArticle } from "./common/homeArticle";
import ArticleGenerator from "./components/ArticleGenerator";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import MainLayout from "./components/MainLayout";

const cardList = [
  { id: "1", title: "Inventory Management", href: "/SicilyPulse.jpg" },
  { id: "2", title: "Product Management", href: "/inventory-management.png" },
];

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
      <Carousel projects={cardList} />
    </MainLayout>
  );
}
