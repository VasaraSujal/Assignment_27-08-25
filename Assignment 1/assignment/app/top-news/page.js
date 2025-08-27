// app/top-news/page.js
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export const revalidate = 600; // ISR: 10 minutes

async function fetchTopNews() {
  const res = await fetch(
    "https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=10"
  );
  return res.json();
}

function timeAgo(timestamp) {
  const diff = Math.floor((Date.now() - new Date(timestamp)) / 1000);
  const hours = Math.floor(diff / 3600);
  return hours < 24 ? `${hours}h ago` : `${Math.floor(hours / 24)}d ago`;
}

export default async function TopNewsPage() {
  const data = await fetchTopNews();
  const stories = data.hits || [];

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Top News
      </Typography>

      {stories.map((story) => (
        <Card key={story.objectID} sx={{ mb: 2 }}>
          <CardContent>
            <a
              href={story.url || "http://codinggita.com/"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" color="primary">
                {story.title}
              </Typography>
            </a>
            <Typography color="text.secondary" variant="body2">
              {story.points} points • {story.author} • {timeAgo(story.created_at)}
            </Typography>
            <Link href={`/story/${story.objectID}`}>
              <Typography variant="body2" color="secondary">
                View details →
              </Typography>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
