import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loading } from "../loading";

interface CollectionsBlockProps {
  loading: boolean;
  data:
    | {
        id: string;
        title: string;
        url: string;
      }[]
    | undefined;
  searchTerm: string;
}

export function CollectionsBlock({
  loading,
  data,
  searchTerm,
}: CollectionsBlockProps) {
  return (
    <div className="min-h-[60px]">
      <h3 className="p-2 bg-gray-100 font-medium text-gray-400 text-xs uppercase">
        Collections
      </h3>
      {loading ? (
        <Loading />
      ) : data && data.length ? (
        <div>
          {data.map(({ title, url, id }) => {
            return (
              <Link
                key={id}
                href={url}
                className={cn(
                  "transition-colors w-full py-1 px-2 block hover:bg-gray-50 text-sm"
                )}
              >
                {title}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="min-h-[60px] flex justify-center items-center">
          <h3 className="text-gray-300 text-sm">Not Found</h3>
        </div>
      )}
    </div>
  );
}
