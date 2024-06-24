import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Link from "next/link";
export default function Richtext({ data }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node?.data?.target?.fields;
        return (
          <img
            src={`https://${file?.url}`}
            alt={title}
            className=""
            loading="lazy"
          />
        );
      },
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <Link
          target="_blank"
          href={data?.uri}
          className="max-w-full break-words"
        >
          {children}
        </Link>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>;
      },
      [BLOCKS.code]: (node, children) => {
        return <code>{children}</code>;
      },
    },
  };
  return (
    data &&
    data?.content?.map((rtNode) => {
      return <>{documentToReactComponents(rtNode, options)}</>;
    })
  );
}
