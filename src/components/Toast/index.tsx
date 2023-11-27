export const Toast = () => {
  return (
    <div
      id="toast-top-right"
      className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-blue-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
    >
      <div className="text-sm font-normal">Top right positioning.</div>
    </div>
  );
};
