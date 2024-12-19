import React from "react";

interface Props {
  children: React.ReactNode;
}

export function SocialIcon({ children }: Props): React.ReactNode {
  return (
    <div className="bg-secondary rounded-full w-max p-2 flex justify-center items-center">
      {children}
    </div>
  );
}
