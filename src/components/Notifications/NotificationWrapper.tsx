import { ReactNode } from "react";
import Paper from "@mui/material/Paper";

interface NotificationWrapperProps {
  children: ReactNode;
}

export default function NotificationWrapper({
  children,
}: NotificationWrapperProps) {
  console.log("🚀 ~ file: NotificationWrapper.tsx:15 ~ children:", children);
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: "30px",
      }}
      elevation={3}
    >
      {children}
    </Paper>
  );
}
