import FundSummaryCard from "@/components/FundSummaryCard";

const codes = [122639,120492,125497,118825,125354];

export async function getStaticProps() {
  const results = await Promise.all(
    codes.map((c) => fetch(`https://api.mfapi.in/mf/${c}`).then((r) => r.json()))
  );
  return { props: { results }, revalidate: 3600 }; // 1 hr
}

export default function MarketPage({ results }) {
  return (
    <div>
      <h2>Market Snapshot</h2>
      {results.map((fund) => (
        <FundSummaryCard
          key={fund.meta.scheme_code}
          scheme={fund.meta.scheme_name}
          latestNav={fund.data[0]?.nav}
          latestDate={fund.data[0]?.date}
          deepLink={`/market/fund/${fund.meta.scheme_code}`}
        />
      ))}
    </div>
  );
}