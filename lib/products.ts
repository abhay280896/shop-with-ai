import type {
  PaginationPayloadInterface,
  ProductAPIResponse,
} from "@/app/types/product";

export const getProducts = async ({
  skip = 0,
  limit = 10,
}: PaginationPayloadInterface): Promise<ProductAPIResponse> => {
  console.log("api call", skip, limit);

  const resp = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
  );
  if (!resp.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await resp.json();
  return data;
};
