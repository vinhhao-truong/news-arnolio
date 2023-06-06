import ReactProps from "@/lib/interfaces/ReactProp";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
import { Metadata } from "next";

interface GenerateMetadataProps {
  params: { category: string };
}
export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  return {
    title: capitaliseFirst(params.category) + " | Arnolio News",
  };
}

export default function CategoryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
