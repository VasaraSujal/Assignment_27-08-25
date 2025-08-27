// app/page.js
import NavBar from "@/components/NavBar";
import AppLinkCard from "@/components/AppLinkCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Shared Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My MF Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Track, learn, and compare mutual funds with ease.
        </p>
      </section>

      {/* Quick Links to sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 pb-16">
        <AppLinkCard
          title="Learn"
          description="Guides, tools, and resources to understand mutual funds."
          href="/learn"
        />
        <AppLinkCard
          title="Market"
          description="Explore, compare, and analyze different funds in the market."
          href="/market"
        />
      </section>
    </main>
  );
}
