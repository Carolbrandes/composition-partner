import { ReactNode } from "react";

interface NotificationActionWrapperProps {
  children: ReactNode;
}

export default function NotificationActionWrapper({
  children,
}: NotificationActionWrapperProps) {
  return <div>{children}</div>;
}
