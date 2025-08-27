import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

export default function FundSummaryCard({ scheme, latestNav, latestDate, deepLink }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{scheme}</Typography>
        <Typography>Latest NAV: {latestNav}</Typography>
        <Typography>Date: {latestDate}</Typography>
        {deepLink && <Link href={deepLink}>View Details →</Link>}
      </CardContent>
    </Card>
  );
}
