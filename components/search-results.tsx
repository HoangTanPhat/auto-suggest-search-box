import { cn } from "@/lib/utils";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search, XCircle } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { SuggestionsBlock } from "./search-blocks/suggestions-block";
import { CollectionsBlock } from "./search-blocks/collections-block";
import { ProductsBlock } from "./search-blocks/products-block";
import { DataResponseType } from "@/app/api/search/type";

interface SearchResultProps {
  numberChar: number;
  searchTerm: string;
  checked: {
    suggestions: boolean;
    collections: boolean;
    products: boolean;
  };
  setSearchTerm: Dispatch<SetStateAction<string>>;
  loading: boolean;
  responseApi: DataResponseType | undefined;
}

export function SearchResult({
  checked,
  numberChar,
  searchTerm,
  loading,
  responseApi,
  setSearchTerm,
}: SearchResultProps) {
  return (
    <div className="flex flex-col sm:min-w-[300px] sm:w-[300px]">
      <h3 className="block sm:hidden font-bold mb-4 underline">SEARCH</h3>
      <TextField
        error={numberChar < 1}
        disabled={numberChar < 1}
        placeholder="Search"
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(event.target.value);
        }}
        size="small"
        fullWidth
        margin="dense"
        className={cn(
          "sm:min-w-[300px] sm:w-[300px]",
          numberChar < 1 ? "bg-gray-200" : "bg-transparent"
        )}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: searchTerm ? (
            <InputAdornment position="end">
              <XCircle
                className="w-4 h-4 cursor-pointer"
                onClick={() => setSearchTerm("")}
              />
            </InputAdornment>
          ) : null,
        }}
      />

      {numberChar < 1 ? (
        <span className="text-xs text-red-500 w-fit mt-2">Error!</span>
      ) : null}

      {searchTerm && searchTerm.length >= numberChar && (
        <div className="border sm:min-w-[300px] sm:w-[300px]">
          {checked.suggestions && (
            <SuggestionsBlock
              loading={loading}
              data={responseApi && responseApi.response.suggestions}
              searchTerm={searchTerm}
            />
          )}

          {checked.collections && (
            <CollectionsBlock
              loading={loading}
              data={responseApi && responseApi.response.collections}
              searchTerm={searchTerm}
            />
          )}

          {checked.products && (
            <ProductsBlock
              loading={loading}
              data={responseApi && responseApi.response.products}
              searchTerm={searchTerm}
            />
          )}
        </div>
      )}
    </div>
  );
}
