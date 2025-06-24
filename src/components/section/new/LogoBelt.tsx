"use client";

import React, { useEffect, useRef, useState } from "react";

import { config as mainConfig } from "@/config/main";

import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export type LogoBeltProps = {
  heightClass: string;
  duration: number;
  className?: string;
  images: { src: string; alt: string }[];
};

function LogoBelt({ heightClass, duration, className, images }: LogoBeltProps) {
  return (
    <div className={cn(className)}>
      {/* <h2 className="text-center text-xl my-5">
        Trusted by the world&apos;s most innovative companies
      </h2> */}
      <div
        className={cn(
          "flex relative overflow-hidden",
          "mask-x-from-95% mask-x-to-100%",
        )}
      >
        <motion.div
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {images.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className={cn("w-auto flex-none", "h-24", heightClass)}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

LogoBelt.displayName = "LogoBelt";

export { LogoBelt };
