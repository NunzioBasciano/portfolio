"use client";
import { IArticleGeneratorProps } from "@/app/common/interfaces";
import { projectList } from "@/app/common/projectList";
import ArticleGenerator from "@/app/components/ArticleGenerator";
import Carousel from "@/app/components/Carousel";
import ImageComponent from "@/app/components/ImageComponent";
import MainLayout from "@/app/components/MainLayout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function MyWorkDetail({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IArticleGeneratorProps | null>(null);
  const { id } = params;

  useEffect(() => {
    const detail = projectList.find((project) => project.id === id);
    console.log(detail);
    if (detail) {
      setProject(detail);
    }
  }, [id]);

  if (!project) {
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
      <Carousel detailProject={project.iconList} />
    </MainLayout>
  );
}

export default MyWorkDetail;
