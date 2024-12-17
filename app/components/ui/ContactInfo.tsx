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
    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3">
      {children}
      <div className="flex flex-col">
        <span className="text-xs mb-1 text-gray-400">{title}</span>
        <span className="font-bold text-black">{value}</span>
      </div>
    </div>
  );
}
