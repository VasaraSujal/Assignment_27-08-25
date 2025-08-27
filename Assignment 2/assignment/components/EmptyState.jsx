import { Typography, Box } from "@mui/material";

export default function EmptyState({ message }) {
  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography color="text.secondary">{message}</Typography>
    </Box>
  );
}
