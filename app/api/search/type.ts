export interface DataResponseType {
    response: {
      suggestions: {
        term: string;
        url: string;
      }[];
      collections: {
        id: string;
        title: string;
        url: string;
      }[];
      products: {
        id: string;
        title: string;
        url: string;
        brand: string;
        price: number;
        image: string;
      }[];
    };
  }