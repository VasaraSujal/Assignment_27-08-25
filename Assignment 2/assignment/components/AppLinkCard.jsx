"use client";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function AppLinkCard({ title, description, href }) {
  return (
    <Card sx={{ maxWidth: 400, m: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Link href={href} passHref>
          <Button variant="contained" color="primary">
            Go
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
