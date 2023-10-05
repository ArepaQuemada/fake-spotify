interface AnchorProps {
  children: React.ReactNode;
  href: string;
  icon?: JSX.Element;
}

export const Anchor = ({ children, icon, href }: AnchorProps) => {
  return (
    <a
      className="flex gap-4 transition opacity-70 hover:opacity-100 font-bold"
      href={href}
    >
      {icon && <div>{icon}</div>}
      <div>
        <span>{children}</span>
      </div>
    </a>
  );
};
