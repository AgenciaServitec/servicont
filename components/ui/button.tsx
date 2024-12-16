import React from "react";

interface Props{
  children:React.ReactNode;
}

export const Button = ({children}:Props):React.ReactNode => {
  return <button>{children}</button>;
};

