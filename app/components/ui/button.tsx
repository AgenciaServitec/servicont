import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children }: Props): React.ReactNode => {
  return <button className={className}>{children}</button>;
};
