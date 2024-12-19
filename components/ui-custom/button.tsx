import React, { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  className,
  style,
  children,
  onClick,
}: Props): React.ReactNode => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
