// app/page.js
"use client";

import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}&tags=story&hitsPerPage=5`
      );
      const data = await res.json();
      setResults(data.hits || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Tech News — Mini Assignment
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Rendering Methods</Typography>
          <Typography>CSR: Runs fully in the browser with client fetches.</Typography>
          <Typography>SSR: Server renders fresh data on each request.</Typography>
          <Typography>SSG: Pre-rendered at build time, no fetch at runtime.</Typography>
          <Typography>ISR: Like SSG but revalidates at intervals.</Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Link href="/top-news">
          <Button variant="contained">Top News</Button>
        </Link>
        <Link href="/story/38600909">
          <Button variant="outlined">Sample Story</Button>
        </Link>
      </Box>

      <Typography variant="h6" gutterBottom>
        Search Stories (CSR Widget)
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {loading && <Typography>Searching…</Typography>}
      {!loading && results.length === 0 && query && <Typography>No results.</Typography>}

      {results.map((story) => (
        <Card key={story.objectID} sx={{ mb: 1 }}>
          <CardContent>
            <Link href={`/story/${story.objectID}`} style={{ textDecoration: "none" }}>
              <Typography color="primary">{story.title}</Typography>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
