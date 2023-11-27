import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  iconButton?: boolean;
}

export const Button = ({
  children,
  theme,
  disabled,
  className,
  iconButton,
  ...props
}: Props) => {
  function defineClassNameAttachment(): string {
    if (theme === "danger") {
      return "bg-red-600 text-white";
    }
    if (theme === "primary") {
      return "bg-blue-600 text-white";
    }
    return "bg-transparent border-solid border-primary border-2 text-primary";
  }

  function defineDisabledStateClassName(): string {
    if (disabled) {
      return "cursor-not-allowed opacity-60";
    }
    return "";
  }

  function defineMinWidth(): string {
    if (!iconButton) return "min-w-[200px]";

    return "";
  }

  const classes = className ? className : "";

  return (
    <button
      className={`${defineClassNameAttachment()} ${defineDisabledStateClassName()} ${classes} ${defineMinWidth()} px-3 py-3 rounded  w-fit flex align-center justify-center items-center`}
      {...props}
    >
      {children}
    </button>
  );
};
