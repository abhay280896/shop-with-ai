import Image from "next/image";

interface ProductAPIResponse {
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  returnPolicy: string;
}

export default async function Home() {
  const resp = await fetch("https://dummyjson.com/products");
  const { products }: ProductAPIResponse = await resp.json();
  console.log("product", products[0]);

  return (
    <main className="m-2.5">
      <h1>ShopWithAI</h1>
      <h2>Our Products</h2>
      <div className="flex justify-between flex-wrap gap-y-4 m-7">
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
              className="border border-white rounded-xs w-62.5 flex flex-col gap-y-2.5  p-2.5"
              key={id}
            >
              <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                loading="lazy"
              />
              <h3 className="text-center text-[15px]">{title}</h3>
              <p className="text-left text-[13px]">{description}</p>
              <p>⭐ {rating}</p>
              <p>Price: ₹ {price}</p>
              <p>{returnPolicy}</p>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
