import { carouselListHome } from './common/carouselListHome';
import { homeArticle } from './common/homeArticle';
import ArticleGenerator from './components/ArticleGenerator';
import Button from './components/Button';
import Carousel from './components/Carousel';
import MainLayout from './components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <ArticleGenerator
        mainTitle={homeArticle.mainTitle}
        subTitle={homeArticle.subtitle}
        paragraphs={homeArticle.paragraphs}
      >
        <Button downloadCV={true} label="Scarica CV" />
        <Button link="/my-work" label="Progetti" />
        <Button link="/contact" label="Contatti" />
      </ArticleGenerator>
      <Carousel projects={carouselListHome} />
    </MainLayout>
  );
}
