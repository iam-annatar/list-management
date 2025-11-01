import type { ButtonHTMLAttributes, JSX } from "react";

import clsx from "clsx";

export enum TextButtonSizes {
  M = "md",
  L = "lg",
}

export enum TextButtonVariants {
  Primary = "primary",
  Secondary = "secondary",
  Destructive = "destructive",
}

interface TextButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant: TextButtonVariants;
  size: TextButtonSizes;
  label: string;
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

const TextButton = (props: TextButtonProps) => {
  const { type, variant, size, label, icon, className, onClick } = props;

  const variantClassNames = {
    primary: "border border-primary-border bg-transparent",
    secondary: "bg-secondary text-screen-primary [&>svg]:text-screen-primary",
    destructive: "bg-screen-tertiary text-warning [&>svg]:text-warning",
  };

  const sizesClassName = {
    md: "h-10 w-[136px] [&>svg]:size-5",
    lg: "h-12 w-full [&>svg]:size-5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "flex cursor-pointer items-center justify-center gap-2 rounded-[14px] px-2",
        variantClassNames[variant],
        sizesClassName[size],
        className,
      )}
    >
      <span className="text-size-lg leading-7 font-semibold">{label}</span>
      {icon}
    </button>
  );
};

export default TextButton;
