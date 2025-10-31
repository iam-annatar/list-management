import type { ChangeEvent, HTMLInputTypeAttribute, JSX } from "react";

import clsx from "clsx";

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  value: any;
  label?: string;
  inputId?: string;
  placeholder?: string;
  errorMessage?: string;
  helperButton?: string | JSX.Element;
  disabled?: boolean;
  autoFocus?: boolean;
  containerClass?: string;
  onClickHelper?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const {
    type,
    name,
    value,
    label,
    inputId,
    placeholder,
    errorMessage,
    disabled,
    autoFocus,
    containerClass,
    onChange,
  } = props;

  return (
    <div
      className={clsx(
        "flex w-full flex-1 flex-col items-start gap-2",
        containerClass,
      )}
    >
      <label className="text-size-md leading-6 font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        disabled={disabled}
        id={inputId}
        name={name}
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          "hover:bg-screen-primary flex h-12 w-full items-center justify-between rounded-xl bg-transparent ring-1",
          "text-size-md placeholder:text-size-md placeholder:text-secondary size-full p-2 font-normal",
          errorMessage ? "ring-warning" : "ring-primary-border",
        )}
      />
      {errorMessage ? (
        <p className="text-size-md text-warning ml-1 leading-5 font-medium">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
