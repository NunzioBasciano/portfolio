import Image from "next/image";
import React from "react";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

interface ICardProps {
  id?: string;
  index: number;
  icon: string;
  title: string;
  paragraphs?: IParagraphProps[];
  layout?: boolean;
  smallIcon?: ISmallIcon[];
}

interface ISmallIcon {
  title: string;
  src: string;
}

interface IParagraphProps {
  text: string; // Testo iniziale del paragrafo
  keywords?: { keyword: string; after?: string }[]; // Array di parole chiave e testo successivo
}

function Card(props: ICardProps) {
  const { id, index, icon, title, paragraphs, layout, smallIcon } = props;

  return (
    <Link href={`/my-work/${id}`}>
      <div
        key={index}
        className=" p-6 shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl w-full "
      >
        {layout ? (
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-3">
            <Image src={icon} alt={title} layout="fill" objectFit="cover" />
          </div>
        ) : (
          <Image
            src={icon}
            alt={title}
            width={50}
            height={50}
            className="my-6"
          />
        )}
        <h3 className="text-2xl mb-3 text-[var(--orange)]">{title}</h3>
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p className="tracking-wide" key={index}>
              {paragraph.text}
              {paragraph.keywords &&
                paragraph.keywords.map((kw, i) => (
                  <React.Fragment key={i}>
                    <strong className="text-white font-semibold">
                      {kw.keyword}
                    </strong>
                    {kw.after}
                  </React.Fragment>
                ))}
            </p>
          ))}
        {smallIcon && (
          <div className="flex gap-3 mt-3 justify-center h-6">
            {smallIcon.map((item, index) => (
              <ImageComponent key={index} src={item.src} alt={item.title} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default Card;
