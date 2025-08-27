"use client";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

export default function FundList({ funds, onSelect }) {
  if (!funds || funds.length === 0) return <p>No funds found</p>;

  return (
    <Paper sx={{ mt: 2 }}>
      <List>
        {funds.map((fund, i) => (
          <ListItem
            key={i}
            button
            onClick={() => onSelect(fund)}
          >
            <ListItemText
              primary={fund.name}
              secondary={`Category: ${fund.category} | NAV: ₹${fund.nav}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
