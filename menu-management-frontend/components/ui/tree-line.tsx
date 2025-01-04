"use client";

interface TreeLineProps {
  depth: number;
  isLast: boolean;
  hasChildren?: boolean;
}

export function TreeLine({ depth, isLast, hasChildren }: TreeLineProps) {
  if (depth === 0) return null;

  return (
    <div className="absolute left-0 top-0 bottom-0">
      {Array.from({ length: depth }).map((_, index) => {
        const isLastVertical = index === depth - 1;
        return (
          <div
            key={index}
            className={`absolute border-l border-gray-200 dark:border-neutral-700 ${
              isLastVertical && isLast ? "h-[50%]" : "h-full"
            }`}
            style={{ left: `${(index + 1) * 24}px` }}
          />
        );
      })}
      <div
        className="absolute border-t border-gray-200 dark:border-neutral-700 w-6"
        style={{
          left: `${depth * 24}px`,
          top: "50%",
        }}
      />
    </div>
  );
}