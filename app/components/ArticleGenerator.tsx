import React from "react";

interface IArticleGeneratorProps {
  mainTitle?: string;
  title?: string;
  subTitle?: string;
  paragraphs?: IParagraphsProps[];
  buttons?: string[];
  children?: React.ReactNode;
}

interface IParagraphsProps {
  text: string;
  keyword?: string;
  after?: string;
  keyword2?: string;
  after2?: string;
}

function ArticleGenerator(props: IArticleGeneratorProps) {
  const { title, mainTitle, subTitle, paragraphs, children } = props;

  return (
    <div className="py-4 px-6 flex flex-col gap-3">
      {mainTitle && (
        <h1 className="text-white text-2xl my-3 font-semibold">{mainTitle}</h1>
      )}
      {title && (
        <h2 className="text-white text-2xl my-3 font-semibold">{title}</h2>
      )}
      {subTitle && (
        <h3 className="text-3xl mb-2 text-[var(--orange)]">{subTitle}</h3>
      )}

      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <p className="tracking-wide" key={index}>
            {paragraph.text}

            {paragraph.keyword && <strong>{paragraph.keyword}</strong>}

            {paragraph.after}

            {paragraph.keyword2 && (
              <>
                <strong>{paragraph.keyword2}</strong>
                {paragraph.after2}
              </>
            )}
          </p>
        ))}

      {children && <div className="flex gap-3">{children}</div>}
    </div>
  );
}

export default ArticleGenerator;
