import { ICategory } from "@/models/category";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Description({
  category,
  slug,
}: {
  category: ICategory[];
  slug: string;
}) {
  return (
    <div className=" mt-5 mb-8 p-2">
      <h2 className=" font-normal text-xs lg:text-sm">
        {category?.map((e) => {
          if (e.id == Number(slug))
            return (
              <div key={e.id}>
                <ReactMarkdown>{e.description}</ReactMarkdown>
              </div>
            );
        })}
      </h2>
    </div>
  );
}
