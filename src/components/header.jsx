"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Header = ({ logo, headerList, serviceLinks }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDowns, setShowDropDowns] = useState([]);
  const menuRef = useRef();
  const menuWrapRef = useRef();

  const handleMenuDropDowns = (index) => {
    setShowDropDowns((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    if (!showMenu) {
      menuWrapRef.current.style.height = "0";
    } else {
      const height = Array.from(menuRef.current.children).reduce(
        (acc, child) => {
          return acc + child.clientHeight;
        },
        0
      );

      menuWrapRef.current.style.height = `${height}px`;
    }
  }, [showMenu, showDropDowns]);

  return (
    <div className="max-container absolute z-10 bg-transparent top-[57px] left-1/2 -translate-x-1/2">
      <div className="py-5 flex items-center justify-between lg:justify-center gap-8 header max-w-full relative">
        <div>
          <Link href="/" className="block w-max mx-auto">
            <Image
              src={"https:" + logo}
              alt="logo"
              width={300}
              height={84}
              className="max-w-40 md:max-w-full hidden md:block"
            />
            <Image
              src={"https:" + logo}
              alt="logo"
              width={160}
              height={40}
              className="max-w-40 md:hidden"
            />
          </Link>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="menu"
          className="bg-gray-cement p-2.5 rounded relative cursor-pointer lg:hidden"
        >
          <span className="menu-icon">
            <span className="menu-icon-span"></span>
            <span className="menu-icon-span"></span>
            <span className="menu-icon-span"></span>
          </span>
        </button>
        <div
          ref={menuWrapRef}
          className={`menu-drop-down lg:hidden overflow-hidden h-0`}
          style={{
            transition: "height .15s ease",
          }}
        >
          <div ref={menuRef}>
            {headerList?.map((item, i) => {
              if (item?.children?.length > 0 || item?.text === "Services") {
                return (
                  <div className="block" key={i}>
                    <button
                      className={`border-t border-white/10 ${
                        i === 0 ? "border-none" : ""
                      } p-2.5 text-left w-full`}
                      onClick={() => handleMenuDropDowns(i)}
                    >
                      {item?.text}
                    </button>
                    {showDropDowns.includes(i) && (
                      <div className="flex flex-col bg-slate-40 pl-2.5">
                        {(item?.text === "Services"
                          ? serviceLinks
                          : item?.children
                        )?.map((listItem, index) => {
                          return (
                            <Link
                              target={listItem?.target || "_self"}
                              href={listItem?.link || ""}
                              key={index}
                              className="p-2.5 text-white"
                              onClick={() => setShowMenu(false)}
                            >
                              {listItem?.text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else
                return (
                  <Link
                    className="block"
                    href={item?.link || ""}
                    target={item?.target || "_self"}
                    key={i}
                    onClick={() => setShowMenu(false)}
                  >
                    <button
                      className={`border-t border-white/10 ${
                        i === 0 ? "border-none" : ""
                      } p-2.5 text-left w-full`}
                    >
                      {item?.text}
                    </button>
                  </Link>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
