'use client';
import {
  IArticleDetailGeneratorProps,
  IArticleGeneratorProps,
} from '@/app/common/interfaces';
import { projectList } from '@/app/common/projectList';
import ArticleDetailGenerator from '@/app/components/ArticleDetailGenerator';
import Carousel from '@/app/components/Carousel';
import ImageComponent from '@/app/components/ImageComponent';
import MainLayout from '@/app/components/MainLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function MyWorkDetail({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IArticleDetailGeneratorProps | null>(
    null
  );
  const { id } = params;

  useEffect(() => {
    const detail = projectList.find((project) => project.id === id);
    console.log(detail);
    if (detail) {
      setProject(detail);
      console.log(detail);
    }
  }, [id]);

  if (!project) {
    return <div>Progetto non trovato</div>;
  }

  return (
    <MainLayout>
      <ArticleDetailGenerator
        title={project.title}
        subTitle={project.subTitle}
        description={project.description}
      >
        {project.technologies?.map((item, index) => (
          <Link key={index} href={`/about-me#${item.id}`}>
            <ImageComponent src={item.src} alt={item.title} />
          </Link>
        ))}
      </ArticleDetailGenerator>
      <Carousel detailProject={project.iconList} />
    </MainLayout>
  );
}

export default MyWorkDetail;
