"use client";
import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <Link href="/learn"><Button color="inherit">Learn</Button></Link>
        <Link href="/learn/funds"><Button color="inherit">Funds</Button></Link>
        <Link href="/learn/tools"><Button color="inherit">Tools</Button></Link>
        <Link href="/market"><Button color="inherit">Market</Button></Link>
        <Link href="/market/compare"><Button color="inherit">Compare</Button></Link>
        <Link href="/market/about"><Button color="inherit">About</Button></Link>
      </Toolbar>
    </AppBar>
  );
}
