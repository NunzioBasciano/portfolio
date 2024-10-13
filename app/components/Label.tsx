export interface ILabelProps {
  label: string;
}

function Label(props: ILabelProps) {
  const { label } = props;
  return <h3 className="text-[var(--orange)] my-1 text-base">{label}</h3>;
}

export default Label;
