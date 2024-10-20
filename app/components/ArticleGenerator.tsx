import React from "react";
import classNames from "classnames";

interface IArticleGeneratorProps {
  mainTitle?: string;
  title?: string;
  subTitle?: string;
  paragraphs?: IParagraphProps[];
  buttons?: string[];
  children?: React.ReactNode;
  layout?: string;
}
interface IParagraphProps {
  text: string; // Testo iniziale del paragrafo
  keywords?: { keyword: string; after?: string }[]; // Array di parole chiave e testo successivo
}

function ArticleGenerator(props: IArticleGeneratorProps) {
  const { title, mainTitle, subTitle, paragraphs, children, layout } = props;

  return (
    <div className={classNames("py-4 px-6 flex flex-col gap-3", layout)}>
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
            {paragraph.keywords &&
              paragraph.keywords.map((kw, i) => (
                <React.Fragment key={i}>
                  <strong>{kw.keyword}</strong>
                  {kw.after}
                </React.Fragment>
              ))}
          </p>
        ))}

      {children && <div className="flex gap-3">{children}</div>}
    </div>
  );
}

export default ArticleGenerator;
