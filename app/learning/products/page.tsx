import { Suspense } from "react";

async function ProductDetails({ shouldFail }: { shouldFail: boolean }) {
  if (shouldFail) {
    throw new Error("Simulated product error");
  }

  return <h2>Product loaded successfully!</h2>;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ fail?: string }>;
}) {
  const params = await searchParams;
  const shouldFail = params.fail === "true";

  return (
    <main>
      <h1>Products</h1>

      <Suspense fallback={<p>Loading product...</p>}>
        <ProductDetails shouldFail={shouldFail} />
      </Suspense>
    </main>
  );
}
