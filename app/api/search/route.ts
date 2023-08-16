import { searchData } from "@/lib/data";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const termParam = req.nextUrl.searchParams.get('term');
  if (termParam) {
    const filterSuggestions = searchData.suggestions.filter((item) =>
      item.term.toLowerCase().includes(termParam?.toString().toLowerCase())
    );
    const filterCollections = searchData.collections.filter((item) =>
      item.title.toLowerCase().includes(termParam?.toString().toLowerCase())
    );
    const filterProducts = searchData.products.filter((item) =>
      item.title.toLowerCase().includes(termParam?.toString().toLowerCase())
    );
    const response = {
      suggestions: filterSuggestions,
      collections: filterCollections,
      products: filterProducts,
    };

    return NextResponse.json({response}, {status: 200})
  } else {
    return NextResponse.json({message: 'Search term is missing'}, {status: 400})
  }
}
