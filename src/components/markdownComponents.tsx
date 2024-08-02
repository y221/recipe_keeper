import { Components } from 'react-markdown';

export const markdownComponents: Components = {
  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-4" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-xl font-medium my-4" {...props} />,
  p: ({ node, ...props }) => <p className="mb-2 text-base text-gray-700" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2" {...props} />,
  li: ({ node, ...props }) => <li className="ml-4" {...props} />,
  code: ({ node, className, children, ...props }) => (
      <code className="bg-gray-100 p-1 rounded" {...props}>{children}</code>
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props} />
  ),
  table: ({ node, ...props }) => (
    <table className="table w-full border-collapse border border-gray-200" {...props} />
  ),
  th: ({ node, ...props }) => <th className="border border-gray-200 p-2 bg-gray-100" {...props} />,
  td: ({ node, ...props }) => <td className="border border-gray-200 p-2" {...props} />,
}