import FundSummaryCard from "@/components/FundSummaryCard";
import { Box, Typography } from "@mui/material";

export const revalidate = 86400; // 1 day

const codes = [122639,120492,125497,118825,125354,118955,120166,120586,118778,130503];

async function fetchFund(code) {
  const res = await fetch(`https://api.mfapi.in/mf/${code}`);
  return res.json();
}

export default async function FundsPage() {
  const results = await Promise.all(codes.map(fetchFund));

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Funds (ISR)</Typography>
      {results.map((fund) => {
        const latest = fund.data?.[0];
        if (!latest) return null;
        return (
          <FundSummaryCard
            key={fund.meta.scheme_code}
            scheme={fund.meta.scheme_name}
            latestNav={latest.nav}
            latestDate={latest.date}
            deepLink={`/learn/fund/${fund.meta.scheme_code}`}
          />
        );
      })}
    </Box>
  );
}
