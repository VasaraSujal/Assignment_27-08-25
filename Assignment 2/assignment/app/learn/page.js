import { Typography, Box } from "@mui/material";
import AppLinkCard from "@/components/AppLinkCard";

export const dynamic = "force-static"; // SSG

export default function LearnPage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Learning Hub</Typography>
      <Typography>
        Overview of routers and rendering modes (CSR, SSR, SSG, ISR).
      </Typography>
      <AppLinkCard title="Funds" href="/learn/funds" />
      <AppLinkCard title="Tools" href="/learn/tools" />
      <AppLinkCard title="Market Snapshot" href="/market" />
    </Box>
  );
}
