"use client";
import Pagination from "./Pagination";
import { getProducts, searchProducts } from "@/lib/products";
import { useState } from "react";
import Card from "./Card";
import Loading from "../loading";
import type { PaginationPropsType, Product } from "../types/product";

const ProductClient = ({
  initialProducts,
  total,
  query,
}: {
  initialProducts: Product[];
  total: number;
  query: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onPaginationChange = async (
    skip: number,
    limit: number,
    page: number,
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = query
        ? await searchProducts(skip, limit, query)
        : await getProducts({ skip, limit });
      setProducts(data.products);
      setCurrentPage(page);
      setLimit(limit);
    } catch (err) {
      setError(err instanceof Error ? err.message : "something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const PaginationProps: PaginationPropsType = {
    total,
    isLoading,
    limit,
    currentPage,
    onPaginationChange,
  };

  return (
    <>
      <Pagination {...PaginationProps} />
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
