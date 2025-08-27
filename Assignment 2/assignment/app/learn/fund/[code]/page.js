import FundDetail from "@/components/FundDetail";
import EmptyState from "@/components/EmptyState";

export const dynamic = "force-dynamic"; // SSR

export default async function FundPage({ params }) {
  const { code } = params;
  const res = await fetch(`https://api.mfapi.in/mf/${code}`);
  if (!res.ok) return <EmptyState message="Invalid fund code." />;
  const fund = await res.json();

  if (!fund.meta) return <EmptyState message="No data for this code." />;

  return (
    <FundDetail fund={fund} />
  );
}
