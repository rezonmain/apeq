import { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <code className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-500">
      {children}
    </code>
  );
}
