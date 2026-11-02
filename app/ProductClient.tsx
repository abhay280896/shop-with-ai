"use client";
import Image from "next/image";
import Pagination from "./Pagination";
import { Star } from "lucide-react";
import { getProducts, Product } from "@/lib/products";
import { useState } from "react";

const ProductClient = ({
  initialProducts,
  total,
}: {
  initialProducts: Product[];
  total: number;
}) => {
  const [products, setProducts] = useState(initialProducts);

  const onPaginationChange = async (skip: number, limit: number) => {
    const data = await getProducts({
      skip,
      limit,
    });
    setProducts(data.products);
  };

  return (
    <>
      <Pagination total={total} onPaginationChange={onPaginationChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 m-7">
        {products.map(
          ({
            id,
            title,
            description,
            price,
            rating,
            returnPolicy,
            thumbnail,
          }) => (
            <div
              className="border border-white rounded-xs flex flex-col gap-y-2.5 p-2.5 h-112.5"
              key={id}
            >
              <div className="relative w-full h-44 shrink-0">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>

              <h3 className="text-center text-[15px] line-clamp-1">{title}</h3>

              <p className="text-left text-[13px] line-clamp-3">
                {description}
              </p>

              <div className="flex items-center">
                <Star fill="yellow" stroke="yellow" className="w-3.5" />
                <span className="mx-0.5">{rating}</span>
              </div>

              <p>Price: ₹{price}</p>

              <p className="line-clamp-1">{returnPolicy}</p>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default ProductClient;
