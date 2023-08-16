interface LoadingProps {
  gridLoading?: boolean;
}

export function Loading({ gridLoading = false }: LoadingProps) {
  if (gridLoading) {
    return (
      <>
        {Array.from(Array(1).keys()).map((_, index) => {
          return (
            <div key={index} className="w-full p-2 flex gap-4 h-[100px]">
              <div className="w-1/4 relative h-full bg-gray-100 animate-pulse"></div>
              <div className="w-3/4">
                <div className="bg-gray-100 rounded-full animate-pulse h-4 mb-2"></div>
                <div className="bg-gray-100 rounded-full animate-pulse h-4 mb-1 w-40"></div>
                <div className="bg-gray-100 rounded-full animate-pulse h-4 w-20"></div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className="min-h-[60px] flex justify-center items-center flex-col p-2 gap-2">
      {Array.from(Array(3).keys()).map((_, index) => {
        return (
          <div
            key={index}
            className="text-gray-300 h-4 w-full rounded-full animate-pulse bg-gray-100"
          ></div>
        );
      })}
    </div>
  );
}
