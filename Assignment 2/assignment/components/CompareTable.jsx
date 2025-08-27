"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function CompareTable({ funds }) {
  if (!funds || funds.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fund Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>NAV</TableCell>
            <TableCell>1Y Return</TableCell>
            <TableCell>3Y Return</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {funds.map((fund, i) => (
            <TableRow key={i}>
              <TableCell>{fund.name}</TableCell>
              <TableCell>{fund.category}</TableCell>
              <TableCell>₹{fund.nav}</TableCell>
              <TableCell>{fund.return1y}%</TableCell>
              <TableCell>{fund.return3y}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
