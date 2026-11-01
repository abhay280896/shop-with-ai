import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Reference the GIF directly from the public folder */}
      <img
        src="/images/not-found2.gif"
        alt="Page not found"
        className="w-100 h-100 object-contain"
      />
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Return Home
      </Link>
    </div>
  );
}
