import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-4 bg-white rounded-lg shadow-sm"
    >
      <h1 className="text-xl font-semibold mb-2 border-b pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}