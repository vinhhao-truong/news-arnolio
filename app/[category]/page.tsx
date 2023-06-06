"use client";
import { GetServerSideProps, Metadata } from "next";
import React from "react";
import { notFound, useParams } from "next/navigation";
import NewsList from "../../components/common/NewsList";
import { capitaliseFirst } from "../../lib/utils/format/formatString";

const categories: string[] = [
  "business",
  "entertainment",
  "health",
  "science",
  "sport",
  "technology",
];

const NewsCategory = () => {
  const paramCategory = useParams();

  if (!categories.includes(paramCategory.category)) {
    notFound();
  }

  return (
    <main className="">
      <h1 className="mb-3 text-4xl font-bold text-system-blue">
        {capitaliseFirst(paramCategory.category)}
      </h1>
      <NewsList category={paramCategory.category} />
    </main>
  );
};

export default NewsCategory;
