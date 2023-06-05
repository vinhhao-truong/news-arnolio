"use client";

import NewsList from "../components/common/NewsList";

export default function Home() {
  return (
    <main className="">
      <h1 className="mb-3 text-4xl font-bold text-system-blue">News feed</h1>
      <NewsList />
    </main>
  );
}
