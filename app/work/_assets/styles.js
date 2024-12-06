// These styles are used in the content of the articles. When you update them, all articles will be updated.
export const styles = {
    h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-2 text-base-content",
    h3: "text-xl lg:text-2xl font-bold tracking-tight mb-1 text-base-content",
    p: "text-base-content/90 leading-relaxed",
    ul: "list-inside list-disc text-base-content/90 leading-relaxed pl-4", // Added pl-4 for left padding
    li: "list-item pl-2", // Added pl-2 for additional indent on list items
    // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
    code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
    codeInline:
      "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
  };