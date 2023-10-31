"use client";

import ORContainer from "@/components/Reuse/ORContainer";
import ORImage from "@/components/Reuse/ORImage";
import ORList from "@/components/Reuse/ORList";
import ORListItem from "@/components/Reuse/ORListItem";
import React from "react";
import { Data } from "./Data";
import { ORLink } from "@/components/Reuse/Tags";

import { usePathname } from "next/navigation";

const Menubar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="py-4">
        <ORContainer>
          <div className="grid-cols-1 flex items-center justify-between">
            {/* logo */}
            <div className="w-1/4">
              <ORImage
                image="/images/Logo.png"
                width="70"
                height="20"
                alt="logo"
              />
            </div>

            {/* menu */}
            <div className="w-3/4">
              <ORList className="flex items-center gap-6 justify-end">
                {Data.map((data, i) => (
                  <ORListItem key={i}>
                    <ORLink
                      url={data.url}
                      name={data.name}
                      className={`${
                        pathname === data.url
                          ? "text-main-color"
                          : "text-text-color"
                      }`}
                    />
                  </ORListItem>
                ))}
              </ORList>
            </div>
          </div>
        </ORContainer>
      </nav>
    </>
  );
};

export default Menubar;
