"use client";
import { Card, CardContent, Typography, Divider } from "@mui/material";

export default function FundDetail({ fund }) {
  if (!fund) return <Typography>No Fund Selected</Typography>;

  return (
    <Card sx={{ maxWidth: 600, m: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h5">{fund.name}</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1">Category: {fund.category}</Typography>
        <Typography variant="body1">NAV: ₹{fund.nav}</Typography>
        <Typography variant="body1">1Y Return: {fund.return1y}%</Typography>
        <Typography variant="body1">3Y Return: {fund.return3y}%</Typography>
      </CardContent>
    </Card>
  );
}
