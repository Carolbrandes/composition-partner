import Typography from "@mui/material/Typography";

interface NotificationContentProps {
  text: string;
  date: string;
}

export default function NotificationContent({
  text,
  date,
}: NotificationContentProps) {
  return (
    <div>
      <Typography variant="h6" gutterBottom sx={{ marginBottom: "0" }}>
        {text}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {date}
      </Typography>
    </div>
  );
}
