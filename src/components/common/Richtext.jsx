import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Link from "next/link";

export default function Richtext({ data }) {
  console.log("START", data, "END");
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node?.data?.target?.fields;
        return <img src={`https://${file?.url}`} alt={title} loading="lazy" />;
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
        const content = node.content.map((child) => child.value).join("");
        const containsIframe = /<iframe.*<\/iframe>/i.test(content);

        if (containsIframe) {
          return (
            <div
              className="mb-6 max-w-full"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          );
        }

        const paragraphContent = children.reduce((acc, child) => {
          if (typeof child === "string") {
            const parts = child.split(/(<\/?br\s*\/?>|<c>.*?<\/c>)/);
            acc.push(...parts);
          } else {
            acc.push(child);
          }
          return acc;
        }, []);

        const styledChildren = paragraphContent.map((part, index) => {
          if (typeof part === "string") {
            if (part.startsWith("<c>") && part.endsWith("</c>")) {
              const text = part.substring(3, part.length - 4);
              return (
                <span
                  key={index}
                  className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-red-500 px-2.5 py-0.5"
                >
                  {text}
                </span>
              );
            } else if (
              part === "<br>" ||
              part === "<br/>" ||
              part === "<br />"
            ) {
              return <br key={index} />;
            } else {
              return <span key={index}>{part}</span>;
            }
          } else {
            return part;
          }
        });

        return <div className="mb-6">{styledChildren}</div>;
      },
      [BLOCKS.CODE]: (node, children) => {
        return <code>{children}</code>;
      },
    },
  };

  return (
    data &&
    data?.content?.map((rtNode, index) => {
      return (
        <React.Fragment key={index}>
          {documentToReactComponents(rtNode, options)}
        </React.Fragment>
      );
    })
  );
}
