// src/components/TrackedLink.tsx
import { logEvent } from "firebase/analytics";
import React, { type AnchorHTMLAttributes } from "react";
import { analytics } from "../FirebaseConfig";

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
  const handleClick = () => {
    logEvent(analytics, eventName, eventParams);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default TrackedLink;
