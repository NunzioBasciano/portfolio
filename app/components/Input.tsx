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
      className="py-1 px-6 rounded-2xl w-full my-1"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
