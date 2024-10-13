import { Dispatch, SetStateAction } from "react";
import Label from "./Label";
import Input from "./Input";

interface IInputBox {
  label: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  inputType?: "text" | "email" | "number" | "textarea";
  inputName?: string;
}

function InputBox(props: IInputBox) {
  const { label, placeholder, setValue, value, inputType, inputName } = props;

  return (
    <div className="">
      <Label label={label} />

      {inputType === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <Input
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
        />
      )}
    </div>
  );
}

export default InputBox;
