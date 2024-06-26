import Link from "next/link";
import React from "react";
import favicon from "../../public/images/favicon-withoutbg.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Navbar({
  headerList = [],
  serviceLinks = [],
  button = {},
}) {
  const pathName = usePathname();
  return (
    <nav style={{ display: "unset" }}>
      <div className="sticky top-0 z-50 bg-neutral-900 py-3 shadow-[0_15px_14px_0_rgba(20,24,25,0.1)] top-nav max-h-14 flex items-center">
        <div className="max-container">
          <div className="flex items-center justify-between gap-8 w-full">
            <div className="hidden lg:flex items-center gap-8">
              {headerList.map((item, i) => {
                if (item?.children?.length > 0 || item?.text === "Services") {
                  return (
                    <div
                      key={i}
                      className={`pb-2 border-b text-gray-light hover:text-white transition-colors duration-150 ease-in-out header-list border-transparent`}
                    >
                      <span className="flex items-center gap-1">
                        {item?.text === "Home" && (
                          <Image
                            src={favicon.src}
                            alt=""
                            width={40}
                            height={40}
                          />
                        )}
                        {item?.text}
                      </span>
                      <div className="header-drop-down">
                        {(item?.text === "Services"
                          ? serviceLinks
                          : item?.children
                        )?.map((listItem, index) => {
                          if (listItem?.text) {
                            return (
                              <div key={index}>
                                <Link
                                  target={listItem?.target || "_self"}
                                  href={listItem?.link || ""}
                                >
                                  {listItem?.text}
                                </Link>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={i}
                      href={item?.link || ""}
                      target={item?.target || "_self"}
                      className={`hover:text-white transition-colors duration-150 ease-in-out pb-2 border-b border-transparent ${
                        item?.link ? "hover:underline" : ""
                      } ${
                        pathName.includes(item?.link)
                          ? "!text-primary border-primary"
                          : "!text-gray-light"
                      } ${
                        item.link === "/" && pathName !== "/"
                          ? "border-none"
                          : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {item?.text === "Home" && (
                          <Image
                            src={favicon.src}
                            alt=""
                            width={40}
                            height={40}
                          />
                        )}
                        <span
                          className={
                            item?.text === "Home" && pathName !== "/"
                              ? "text-gray-light !border-none"
                              : ""
                          }
                        >
                          {item?.text}
                        </span>
                      </span>
                    </Link>
                  );
                }
              })}
            </div>
            <div className="w-full lg:w-max flex justify-end">
              <Link
                href={button?.buttonLink || ""}
                target={button?.buttonTarget || "_self"}
                className="top-nav-btn"
              >
                {button?.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
