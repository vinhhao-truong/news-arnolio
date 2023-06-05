"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import NewsList from "@/components/common/NewsList";

const Keyword = () => {
  const searchQuery = useSearchParams();
  const keyword = searchQuery.get("q");

  return (
    <main className="">
      <h1 className="mb-3 text-4xl font-bold text-system-blue">
        News related to &ldquo;{keyword}&rdquo;
      </h1>
      <NewsList keyword={keyword} />
    </main>
  );
};

export default Keyword;
