import Link from "next/link";
import React from "react";
import favicon from "../../public/images/favicon-withoutbg.png";
import Image from "next/image";

export default function Navbar({ headerList, serviceLinks, button }) {
  return (
    <nav style={{ display: "unset" }}>
      <div class="sticky top-0 z-50 bg-[#22272a] py-[12px] shadow-[0_15px_14px_0_rgba(20,24,25,0.1)] top-nav max-h-[56px] flex items-center">
        <div class="max-container">
          <div class="flex items-center justify-between gap-[30px] w-full">
            <div className="hidden lg:flex items-center gap-[30px]">
              {headerList?.map((item, i) => {
                if (item?.children?.length > 0 || item?.text === "Services") {
                  return (
                    <div
                      key={i}
                      className={`text-[#8e9fa9] hover:text-white transition-colors duration-150 ease-in-out header-list`}
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
                      className={`text-[#8e9fa9] hover:text-white transition-colors duration-150 ease-in-out ${
                        item?.link ? "hover:underline" : ""
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
                        {item?.text}
                      </span>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={i}
                    href={`${item?.link || ""}`}
                    target={`${item?.target}`}
                    class="text-[#8e9fa9] text-[14px] transition-colors duration-150 ease-in-out hover:text-white"
                  >
                    {item?.text}
                  </Link>
                );
              })}
            </div>
            <div className="w-full lg:w-max flex justify-end">
              <Link
                href={`${button?.buttonLink || ""}`}
                target={`${button?.buttonTarget}`}
                class="top-nav-btn"
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
