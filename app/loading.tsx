export default function Loading({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 m-7">
      {Array.from({ length: count }).map((_, i) => (
        <div
          className="border border-white/20 rounded-xs flex flex-col gap-y-3 p-2.5 h-112.5 animate-pulse"
          key={i}
        >
          {/* Image skeleton */}
          <div className="w-full h-44 shrink-0 rounded bg-gray-700" />

          {/* Title skeleton */}
          <div className="h-4 w-3/4 mx-auto rounded bg-gray-700" />

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-gray-700" />
            <div className="h-3 w-full rounded bg-gray-700" />
            <div className="h-3 w-2/3 rounded bg-gray-700" />
          </div>

          {/* Rating skeleton */}
          <div className="h-3 w-12 rounded bg-gray-700" />

          {/* Price skeleton */}
          <div className="h-4 w-1/2 rounded bg-gray-700" />

          {/* Return policy skeleton */}
          <div className="h-3 w-2/3 rounded bg-gray-700" />
        </div>
      ))}
    </div>
  );
}
