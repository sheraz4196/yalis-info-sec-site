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
        const containsIframe = /<iframe.*<\/iframe>/i.test(children[0]);
        if (containsIframe && typeof document !== "undefined") {
          const iframeHTML = children[0];
          const embedElement = document.querySelector("#Embed");
          if (embedElement) {
            embedElement.innerHTML = iframeHTML;
            embedElement.classList.add("max-w-full");
          }
          if (typeof children[0] === "string") {
            return (
              <div className="mb-6 max-w-full">
                <div id="Embed" className="max-w-full"></div>
              </div>
            );
          } else {
            return <p>{children}</p>;
          }
        }

        const paragraphContent = children.reduce((acc, child) => {
          // Add each part to the accumulator array
          if (typeof child === "string") {
            const parts = child.split(/(<\/?br\s*\/?>|<c>.*?<\/c>)/);
            // Add each part to the accumulator array
            acc.push(...parts);
          } else {
            acc.push(child);
          }
          return acc;
        }, []);

        const styledChildren = paragraphContent.map((part, index) => {
          if (typeof part === "string") {
            // Check if the part is enclosed in <c> tags
            if (part.startsWith("<c>") && part.endsWith("</c>")) {
              // Extract the text within <c> tags
              const text = part.substring(3, part.length - 4);
              // Apply CSS styling to the text
              return (
                <span
                  key={index}
                  className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-red-500 px-2.5 py-0.5"
                >
                  {text}
                </span>
              );
              s;
            } else if (
              part === "<br>" ||
              part === "<br/>" ||
              part === "<br />"
            ) {
              return <br key={index} />;
            } else {
              // If not enclosed in <c> tags, render the text as-is
              return <span key={index}>{part}</span>;
            }
          } else {
            // If the part is not a string, render it as-is
            return part;
          }
        });

        return <div className="mb-6">{styledChildren}</div>;
      },
      [BLOCKS.code]: (node, children) => {
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
