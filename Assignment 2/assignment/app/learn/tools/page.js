"use client";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import FundSummaryCard from "@/components/FundSummaryCard";
import EmptyState from "@/components/EmptyState";

export default function ToolsPage() {
  const [code, setCode] = useState("");
  const [fund, setFund] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.mfapi.in/mf/${code}`);
      if (!res.ok) throw new Error("Invalid code");
      const data = await res.json();
      setFund(data);
      setError("");
    } catch (e) {
      setFund(null);
      setError("Invalid code or no data.");
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Enter Scheme Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {error && <EmptyState message={error} />}
      {fund && fund.data?.[0] && (
        <FundSummaryCard
          scheme={fund.meta.scheme_name}
          latestNav={fund.data[0].nav}
          latestDate={fund.data[0].date}
        />
      )}
    </Box>
  );
}
