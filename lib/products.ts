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

export async function searchProducts(
  skip = 0,
  limit = 10,
  search = "",
): Promise<ProductAPIResponse> {
  const params = new URLSearchParams({
    q: search,
    skip: String(skip),
    limit: String(limit),
  });
  console.log("params", params);
  const resp = await fetch(
    `https://dummyjson.com/products/search?${params.toString()}`,
  );

  if (!resp.ok) {
    throw new Error("Failed to search products");
  }

  return resp.json();
}
