export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  returnPolicy: string;
}

export type PaginationPropsType = {
  total: number;
  isLoading: boolean;
  limit: number;
  currentPage: number;
  onPaginationChange: (skip: number, limit: number, page: number) => void;
};

export interface ProductAPIResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface PaginationPayloadInterface {
  skip: number;
  limit: number;
}
