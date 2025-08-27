import FundDetail from "@/components/FundDetail";
import EmptyState from "@/components/EmptyState";

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.mfapi.in/mf/${params.code}`);
  if (!res.ok) return { props: { fund: null } };
  const fund = await res.json();
  return { props: { fund } };
}

export default function FundSSR({ fund }) {
  if (!fund || !fund.meta) return <EmptyState message="Invalid or missing data" />;
  return <FundDetail fund={fund} />;
}
