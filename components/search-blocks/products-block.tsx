import Link from "next/link";
import { Loading } from "../loading";
import { cn, formatter } from "@/lib/utils";
import Image from "next/image";

interface ProductsBlockProps {
  loading: boolean;
  data:
    | {
        id: string;
        title: string;
        url: string;
        brand: string;
        price: number;
        image: string;
      }[]
    | undefined;
  searchTerm: string;
}

export function ProductsBlock({
  loading,
  data,
  searchTerm,
}: ProductsBlockProps) {
  return (
    <div className="min-h-[60px]">
      <h3 className="p-2 bg-gray-100 font-medium text-gray-400 text-xs uppercase">
        Products
      </h3>
      {loading ? (
        <Loading gridLoading />
      ) : data && data.length ? (
        <div>
          {data
            .filter((_, index) => index < 3)
            .map(({ id, title, brand, price, image, url }, index) => {
              return (
                <>
                  <Link
                    key={id}
                    href={url}
                    className={cn(
                      "transition-colors w-full p-2 hover:bg-gray-50 flex gap-4 h-[100px] text-sm"
                    )}
                  >
                    <div className="w-1/4 relative h-full">
                      <Image
                        fill
                        className="object-cover w-full h-full"
                        alt="Image"
                        src={image}
                      />
                    </div>
                    <div className="w-3/4">
                      <h3 className="text-sm line-clamp-2 mb-2 font-medium">
                        {title}
                      </h3>
                      <p className="text-xs truncate text-gray-500 mb-1">
                        {brand}
                      </p>
                      <p className="text-xs truncate font-bold">
                        {formatter.format(price)}
                      </p>
                    </div>
                  </Link>
                  {index < 2 ? <hr /> : null}
                </>
              );
            })}
          <div className="bg-gray-100 font-bold text-gray-400 text-xs text-center py-2 border-t">
            <Link href="#" className="w-full">
              VIEW ALL {data.length} PRODUCTS
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[60px] flex justify-center items-center">
          <h3 className="text-gray-300 text-sm">Not Found</h3>
        </div>
      )}
    </div>
  );
}
