"use client";

import { useState, type FormEvent } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setResults([]);
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`,
      );

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const data: { products: { title: string }[] } = await response.json();

      setResults(data.products.map((product) => product.title));
    } catch {
      setErrorMessage("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-search">Search products</label>

        <input
          id="product-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter product name"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {errorMessage && <p role="alert">{errorMessage}</p>}

      {results.map((title) => (
        <p key={title}>{title}</p>
      ))}
    </section>
  );
}
