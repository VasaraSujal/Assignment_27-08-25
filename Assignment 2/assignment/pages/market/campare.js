"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import CompareTable from "@/components/CompareTable";

export default function ComparePage() {
  const [codes, setCodes] = useState([]);
  const [funds, setFunds] = useState([]);

  const handleFetch = async () => {
    const results = await Promise.all(
      codes.map((c) => fetch(`https://api.mfapi.in/mf/${c}`).then((r) => r.json()))
    );
    setFunds(results);
  };

  return (
    <div>
      <TextField
        label="Enter codes (comma separated)"
        onChange={(e) => setCodes(e.target.value.split(","))}
      />
      <Button onClick={handleFetch}>Compare</Button>
      {funds.length > 0 && <CompareTable funds={funds} />}
    </div>
  );
}
