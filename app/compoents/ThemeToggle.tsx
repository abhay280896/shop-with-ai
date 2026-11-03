"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

const getSnapshot = () => true;

const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <button disabled className="rounded-lg border border-gray-300 px-3 py-2">
        Loading...
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
