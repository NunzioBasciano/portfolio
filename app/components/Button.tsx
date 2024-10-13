interface IButtonProps {
  label: string;
}

function Button(props: IButtonProps) {
  const { label } = props;
  return (
    <button className="transition-transform duration-300 transform scale-100 hover:scale-110  mt-3 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white w-fit py-1 px-5 rounded-2xl">
      {label}
    </button>
  );
}

export default Button;
