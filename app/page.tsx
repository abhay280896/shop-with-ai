import { getProducts } from "@/lib/products";
import ProductClient from "./ProductClient";

export default async function Home() {
  const { products, total } = await getProducts({
    skip: 0,
    limit: 10,
  });

  // console.log("product", products);

  return (
    <main className="m-2.5">
      <h2>Our Products</h2>
      <h3 className="text-green-600">{total}</h3>
      <p className="text">Total products</p>
      <ProductClient initialProducts={products} total={total} />
    </main>
  );
}
