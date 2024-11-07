import React from 'react';
import classNames from 'classnames';
import { IArticleDetailGeneratorProps } from '../common/interfaces';
import { ProductDescription } from './ProductDescription';

function ArticleDetailGenerator(props: IArticleDetailGeneratorProps) {
  const { title, mainTitle, subTitle, description, children, layout } = props;

  return (
    <div className={classNames('py-4 px-6 flex flex-col gap-3', layout)}>
      {mainTitle && (
        <h1 className="text-white text-2xl my-3 font-semibold">{mainTitle}</h1>
      )}
      {title && (
        <h2 className="text-white text-2xl my-3 font-semibold">{title}</h2>
      )}
      {subTitle && (
        <h3 className="text-3xl mb-2 text-[var(--orange)]">{subTitle}</h3>
      )}

      {description && <ProductDescription description={description} />}

      {children && <div className="flex gap-3">{children}</div>}
    </div>
  );
}

export default ArticleDetailGenerator;
