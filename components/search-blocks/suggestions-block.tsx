import Link from "next/link";
import { Loading } from "../loading";
import { cn } from "@/lib/utils";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

interface SuggestionsBlockProps {
  loading: boolean;
  data:
    | {
        term: string;
        url: string;
      }[]
    | undefined;
  searchTerm: string;
}

export function SuggestionsBlock({
  loading,
  data,
  searchTerm,
}: SuggestionsBlockProps) {
  return (
    <div className="min-h-[60px]">
      <h3 className="p-2 bg-gray-100 font-medium text-gray-400 text-xs uppercase">
        Suggestions
      </h3>
      {loading ? (
        <Loading />
      ) : data && data.length ? (
        <div>
          {data.map(({ term, url }, index) => {
            const matches = match(term, searchTerm, {
              insideWords: true,
            });
            const parts = parse(term, matches);
            return (
              <Link
                key={index}
                href={url}
                className={cn(
                  "transition-colors w-full py-1 px-2 block hover:bg-gray-50 text-sm"
                )}
              >
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
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
