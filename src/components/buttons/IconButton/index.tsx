import type { JSX } from "react";

import clsx from "clsx";

export enum IconButtonSizes {
  S = "sm",
  M = "md",
  L = "lg",
}

export enum IconButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

interface IconButtonProps {
  icon: JSX.Element;
  variant: IconButtonVariant;
  size: IconButtonSizes;
  onClick?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const { icon, variant, size, onClick } = props;

  const variantClassNames = {
    primary: "bg-transparent",
    secondary: "bg-secondary/80 [&>svg]:text-screen-primary",
  };

  const sizesClassName = {
    sm: "size-10 [&>svg]:size-5",
    md: "size-12 [&>svg]:size-6",
    lg: "size-14 [&>svg]:size-8",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center rounded-[14px] px-2",
        variantClassNames[variant],
        sizesClassName[size],
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
