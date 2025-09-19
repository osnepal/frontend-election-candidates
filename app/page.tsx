"use client";

import { CandidateCard } from "@/components/homepage/CandidateCard";
import HomeSidebar from "@/components/homepage/HomeSidebar";
import Navbar from "@/components/Navbar";
import { candidates } from "@/lib/fake";

export default function Home() {
  return (
    <HomeSidebar>
      <Navbar />
      <main className="min-h-screen pt-15 flex flex-col items-center bg-blue-50/50 dark:bg-blue-900/10">
        {/* Hero Section */}
        <main className="grid grid-cols-1 w-full h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 max-w-7xl">
          {candidates.map((c) => (
            <CandidateCard
              key={c.id}
              name={c.name}
              party={c.party}
              avatar={c.avatar}
              votes={c.votes}
              verified={c.verified}
              // eslint-disable-next-line no-alert
              onVote={() => alert(`You voted for ${c.name}`)}
            />
          ))}
        </main>
      </main>
    </HomeSidebar>
  );
}
