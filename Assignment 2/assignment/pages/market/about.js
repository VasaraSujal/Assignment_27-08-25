export async function getStaticProps() {
  return { props: {} };
}

export default function AboutPage() {
  return (
    <div>
      <h2>About This Project</h2>
      <p>This dashboard mixes App Router (/learn/*) and Pages Router (/market/*).</p>
      <p>CSR: /learn/tools, /market/compare</p>
      <p>SSR: /learn/fund/[code], /market/fund/[code]</p>
      <p>SSG: /learn, /market/about</p>
      <p>ISR: /learn/funds, /market</p>
      <p>Data: from https://api.mfapi.in/mf</p>
    </div>
  );
}
