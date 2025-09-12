// src/components/TrackedLink.tsx
import React, { type AnchorHTMLAttributes } from "react";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  eventName: string;
  eventParams?: { [key: string]: any };
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
  to,
  eventName,
  eventParams,
  children,
  ...props
}) => {
  const handleClick = () => {};

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default TrackedLink;
