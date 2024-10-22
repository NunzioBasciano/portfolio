export interface IArticleGeneratorProps {
  mainTitle?: string;
  title?: string;
  subTitle?: string;
  paragraphs?: IParagraphProps[];
  buttons?: string[];
  children?: React.ReactNode;
  layout?: string;
  description?: IParagraphProps[];
  technologies?: ITechnologies[];
  icon?: string[] | undefined;
}

export interface IParagraphProps {
  text: string;
  keywords?: { keyword: string; after?: string }[];
}

export interface ITechnologies {
  id: string;
  title: string;
  src: string;
}

export interface ICardProps {
  id?: string; // ID del progetto (opzionale, usato se isLink è vero)
  index: number; // Indice dell'elemento nella mappatura
  icon: string[]; // URL dell'icona
  title: string; // Titolo della card
  paragraphs?: IParagraphProps[]; // Paragrafi associati alla card
  layout?: boolean; // Flag per determinare il layout
  smallIcon?: ISmallIcon[]; // Icone più piccole (opzionale)
  isLink?: boolean; // Flag per determinare se è un link
}

export interface ISmallIcon {
  title: string; // Titolo dell'icona piccola
  src: string; // URL dell'icona piccola
}

export interface IParagraphProps {
  text: string; // Testo iniziale del paragrafo
  keywords?: { keyword: string; after?: string }[]; // Array di parole chiave e testo successivo
}
