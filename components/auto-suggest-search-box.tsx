"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import apiRoutes from "@/lib/apiRoutes";
import { apiUrl } from "@/lib/constants";
import { Settings } from "./settings";
import { DataResponseType } from "@/app/api/search/type";
import { SearchResult } from "./search-results";

export function AutoSuggestSearchBox() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [responseApi, setResponseApi] = useState<DataResponseType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState({
    suggestions: true,
    collections: true,
    products: true,
  });
  const [numberChar, setNumberChar] = useState<number>(1);

  const handleCallSearch = async () => {
    if (searchTerm && searchTerm.length >= numberChar) {
      setLoading(true);
      try {
        await axios
          .get(apiUrl + apiRoutes.navigation.searchByTerm, {
            params: { term: searchTerm },
          })
          .then((response) => {
            if (response && response.data) {
              setResponseApi(response.data);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log("Error", error);
          });
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleCallSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm("");
  }, [numberChar]);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-10 justify-center px-4">
      <SearchResult
        loading={loading}
        searchTerm={searchTerm}
        checked={checked}
        numberChar={numberChar}
        setSearchTerm={setSearchTerm}
        responseApi={responseApi}
      />

      <Settings
        checked={checked}
        setChecked={setChecked}
        numberChar={numberChar}
        setNumberChar={setNumberChar}
      />
    </div>
  );
}
