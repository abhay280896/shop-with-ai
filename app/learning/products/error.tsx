"use client";

export default function ProductsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          reset();
          console.log("test");
        }}
      >
        Try again
      </button>
    </main>
  );
}
