const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gradient-to-r from-gray-200 to-gray-300 lg:aspect-none lg:h-80">
        <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-300" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-4 w-3/4 rounded" />
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-4 w-1/2 rounded" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
