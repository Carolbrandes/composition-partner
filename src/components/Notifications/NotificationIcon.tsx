import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export default function NotificationIcon({
  icon: Icon,
}: NotificationIconProps) {
  return <span>{<Icon size={25} />}</span>;
}
