interface Props {
  children: React.ReactNode;
}

export function ContentWrapper({ children }: Props): React.ReactNode {
  return <div className="w-full max-w-[1243px] m-auto">{children}</div>;
}
