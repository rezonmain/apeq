export default function SignInSkeleton() {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse p-12 border border-gray-200 dark:border-gray-700 rounded-2xl min-w-[350px]"
    >
      <div className="mb-12">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-3"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="w-full">
        <div className="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 mb-9"></div>
        <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-11"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[35%] mb-2.5"></div>
        <div className="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 mb-6"></div>
        <div className="h-8 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[460px] mb-8"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
