import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Link from "next/link";
import CopyButton from "./copyButton";
import getHeadingString from "@/utils/get-heading-string";
export default function Richtext({ data }) {
  console.log("START", data, "END");
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.CODE]: (text) => {
        return (
          <div className="mb-6 relative">
            <pre>
              <code>{text}</code>
            </pre>
            <CopyButton
              text={text?.props?.children || text || ""}
              className={"top-1 absolute text-white right-2"}
            />
          </div>
        );
      },
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node?.data?.target?.fields;
        const fileType = file.contentType.split("/")[0];
        switch (fileType) {
          case "video":
            return (
              <video controls className="my- 10">
                <source src={`https://${file?.url}`} type={file.contentType} />
                Your browser does not support the video tag.
              </video>
            );
          case "image":
            return (
              <img
                src={`https://${file?.url}`}
                alt={title}
                className="my-5"
                loading="lazy"
              />
            );
          case "audio":
            return (
              <audio controls className="my-10">
                <source src={`https://${file?.url}`} type={file.contentType} />
                Your browser does not support the audio tag.
              </audio>
            );
          default:
            return <p>Unsupported file type</p>;
        }
      },
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
      [BLOCKS.HEADING_1]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h1 id={headingId} className="mb-r mt-20">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h2 id={headingId} className="mb-6">
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h3 id={headingId} className="mb-5">
            {children}
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h4 id={headingId} className="mb-4">
            {children}
          </h4>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h5 id={headingId} className="mb-3">
            {children}
          </h5>
        );
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        const headingId = getHeadingString(children[0]);
        return (
          <h6 id={headingId} className="mb-2">
            {children}
          </h6>
        );
      },
    },
  };

  return (
    data &&
    data?.content?.map((rtNode, index) => (
      <React.Fragment key={index}>
        {documentToReactComponents(rtNode, options)}
      </React.Fragment>
    ))
  );
}
