"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [hasChangedSearch, setHasChangedSearch] = useState(false);

  useEffect(() => {
    if (!hasChangedSearch) {
      return;
    }

    const timer = setTimeout(() => {
      const query = search.trim();
      router.replace(
        query ? `/products?q=${encodeURIComponent(query)}` : "/products",
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [hasChangedSearch, search, router]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-2xl font-bold text-indigo-600">
          ShopWithAI
        </Link>

        <nav className="flex shrink-0 items-center gap-5">
          <div className="hidden max-w-xl flex-1 md:flex">
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHasChangedSearch(true);
              }}
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <Link
            href="/"
            className="hidden text-sm font-medium text-gray-700 sm:block"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hidden text-sm font-medium text-gray-700 sm:block"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="relative text-gray-700"
            aria-label="Shopping cart"
          >
            <ShoppingCart />
            <span className="absolute bottom-3 left-4 h-5 w-6 rounded-full bg-red-600 text-center text-xs leading-5 text-white">
              0
            </span>
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
