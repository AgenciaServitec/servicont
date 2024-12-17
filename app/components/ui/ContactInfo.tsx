import React from "react";

interface ContactInfoProps {
  title: string;
  value: string;
  children: React.ReactNode;
}

export function ContactInfo({
  children,
  title,
  value,
}: ContactInfoProps): React.ReactNode {
  return (
    <div className="flex flex-col md:flex-row items-center lg:items-center gap-4">
      {children}
      <div className="flex flex-col items-center md:items-start mt-4 md:m-0">
        <span className="text-sm mb-1 text-gray-400">{title}</span>
        <span className="font-medium text-black">{value}</span>
      </div>
    </div>
  );
}
