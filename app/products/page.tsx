import { Suspense } from "react";
import { getProducts, searchProducts } from "@/lib/products";
import ProductClient from "@/app/compoents/ProductClient";

type ProductsPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

async function ProductsContent({ searchParams }: ProductsPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const data = query
    ? await searchProducts(0, 10, query)
    : await getProducts({ skip: 0, limit: 10 });

  return (
    <ProductClient
      key={query}
      initialProducts={data.products}
      total={data.total}
      query={query}
    />
  );
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <main className="p-4">
      <h1 className="mb-5 text-2xl font-bold">Products</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
