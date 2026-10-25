
import { Suspense } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function ProductDetails() {
  const response = await fetch(
    "https://dummyjson.com/products/1"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await response.json();

  return (
    <section>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <h1>ShopWithAI</h1>

      <Suspense fallback={<p>Loading product...</p>}>
        <ProductDetails />
      </Suspense>
    </main>
  );
}
