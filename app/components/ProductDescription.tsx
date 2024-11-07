import parse from 'html-react-parser';
import { IProductDescription } from '../common/interfaces';

export const ProductDescription = (props: IProductDescription) => {
  const { description } = props;
  return <p>{parse(description)}</p>;
};
