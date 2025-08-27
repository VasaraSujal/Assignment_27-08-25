// app/story/[id]/page.js
import { Card, CardContent, Typography, Box } from "@mui/material";

export const dynamic = "force-dynamic"; // SSR

async function fetchStory(id) {
  const res = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
  if (!res.ok) return null;
  return res.json();
}

function timeAgo(timestamp) {
  const diff = Math.floor((Date.now() - new Date(timestamp)) / 1000);
  const hours = Math.floor(diff / 3600);
  return hours < 24 ? `${hours}h ago` : `${Math.floor(hours / 24)}d ago`;
}

export default async function StoryPage({ params }) {
  const story = await fetchStory(params.id);

  if (!story) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Story not found or failed to load.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: "auto" }}>
      <a
        href={story.url || "http://codinggita.com/"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h5" color="primary">
          {story.title}
        </Typography>
      </a>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        {story.points} points • {story.author} • {timeAgo(story.created_at)}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Top Comments
      </Typography>
      {story.children && story.children.slice(0, 3).map((c) => (
        <Card key={c.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body2">{c.text ? c.text.replace(/<[^>]+>/g, "") : "No text"}</Typography>
            <Typography color="text.secondary" variant="caption">
              — {c.author}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {(!story.children || story.children.length === 0) && (
        <Typography>No comments available.</Typography>
      )}
    </Box>
  );
}
