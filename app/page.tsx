import { AutoSuggestSearchBox } from "@/components/auto-suggest-search-box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white items-start mt-4 sm:mt-6 h-full">
      <AutoSuggestSearchBox />
    </main>
  );
}
