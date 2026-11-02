export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  returnPolicy: string;
}

export interface PaginationPropsType {
  total: number;
}

export interface ProductAPIResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface paginationPayloadInterface {
  skip: number;
  limit: number;
}
export const getProducts = async ({
  skip = 0,
  limit = 10,
}: paginationPayloadInterface): Promise<ProductAPIResponse> => {
  console.log("api call", skip, limit);

  const resp = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
  );
  if (!resp.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await resp.json();
  console.log("data", data);
  return data;
};
