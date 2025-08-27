"use client";
import { TextField, Box } from "@mui/material";

export default function SearchBar({ query, setQuery }) {
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Funds..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
}
