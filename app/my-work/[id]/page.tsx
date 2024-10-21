"use client";
import { projectList } from "@/app/common/projectList";
import ArticleGenerator, {
  IArticleGeneratorProps,
} from "@/app/components/ArticleGenerator";
import Carousel from "@/app/components/Carousel";
import ImageComponent from "@/app/components/ImageComponent";
import MainLayout from "@/app/components/MainLayout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function MyWorkDetail({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IArticleGeneratorProps | null>(null);
  const { id } = params;

  useEffect(() => {
    // Trova il progetto corrispondente all'id (convertito a numero)
    const detail = projectList.find((project) => project.id === id);
    if (detail) {
      setProject(detail);
    }
  }, [id]);

  if (!project) {
    // Renderizza un messaggio di caricamento o errore se il progetto non è ancora disponibile
    return <div>Progetto non trovato</div>;
  }

  return (
    <MainLayout>
      <ArticleGenerator
        title={project.title}
        subTitle={project.subTitle}
        paragraphs={project.description}
      >
        {project.technologies?.map((item, index) => (
          <Link key={index} href={`/about-me#${item.id}`}>
            <ImageComponent key={index} src={item.src} alt={item.title} />
          </Link>
        ))}
      </ArticleGenerator>
      <Carousel />
    </MainLayout>
  );
}

export default MyWorkDetail;
