import type { JSX } from "react";

import clsx from "clsx";

export enum TextButtonSizes {
  M = "md",
  L = "lg",
}

export enum TextButtonVariants {
  Primary = "primary",
  Secondary = "secondary",
}

interface TextButtonProps {
  variant: TextButtonVariants;
  size: TextButtonSizes;
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const TextButton = (props: TextButtonProps) => {
  const { variant, size, label, icon, onClick } = props;

  const variantClassNames = {
    primary: "border border-primary-border bg-transparent",
    secondary: "bg-secondary text-screen-primary [&>svg]:text-screen-primary",
  };

  const sizesClassName = {
    md: "h-10 w-[136px] [&>svg]:size-5",
    lg: "h-12 w-full [&>svg]:size-5",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-[14px] px-2",
        variantClassNames[variant],
        sizesClassName[size],
      )}
    >
      <span className="text-size-lg leading-7 font-semibold">{label}</span>
      {icon}
    </button>
  );
};

export default TextButton;
