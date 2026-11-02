"use client";
import Pagination from "./Pagination";
import { getProducts, Product } from "@/lib/products";
import { useState } from "react";
import Card from "./Card";
import Loading from "./loading";

const ProductClient = ({
  initialProducts,
  total,
}: {
  initialProducts: Product[];
  total: number;
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onPaginationChange = async (
    skip: number,
    limit: number,
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProducts({
        skip,
        limit,
      });
      setProducts(data.products);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "something went wrong");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Pagination
        total={total}
        isLoading={isLoading}
        onPaginationChange={onPaginationChange}
      />
      {error && (
        <p className="m-7 text-red-500" role="alert">
          {error}
        </p>
      )}

      {isLoading ? (
        <Loading count={products.length} />
      ) : (
        <Card products={products} />
      )}
    </>
  );
};

export default ProductClient;
