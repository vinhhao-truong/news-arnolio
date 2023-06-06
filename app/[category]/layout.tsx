import ReactProps from "@/lib/interfaces/ReactProp";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
import { Metadata } from "next";

type GenerateMetadataProps = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({
  params,
  searchParams,
}: GenerateMetadataProps): Promise<Metadata> {
  return {
    title: capitaliseFirst(params.category) + " | Arnolio News",
  };
}

const CategoryLayout: React.FC<ReactProps> = ({ children }) => {
  return <>{children}</>;
};

export default CategoryLayout;
