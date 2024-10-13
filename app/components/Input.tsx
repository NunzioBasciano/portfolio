import { Dispatch, SetStateAction } from "react";

interface IInputProps {
  type?: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  name?: string;
}

function Input(props: IInputProps) {
  const { type = "text", placeholder, value, setValue, name } = props;

  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className=""
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
