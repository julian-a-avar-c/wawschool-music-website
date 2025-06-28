import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/my-ui/carousel";
import { cn } from "@/lib/utils";

export function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
      <Carousel setApi={setApi} className="relative h-full">
        <CarouselContent className="h-full rounded-3xl">
          {[
            {
              src: "/images/waw-promo-1.png",
              alt: "WAW Promo 1",
            },
            {
              src: "/images/waw-promo-2.png",
              alt: "WAW Promo 2",
            },
            {
              src: "/images/waw-promo-3.png",
              alt: "WAW Promo 3",
            },
            {
              src: "/images/waw-promo-4.png",
              alt: "WAW Promo 4",
            },
            {
              src: "/images/waw-promo-5.png",
              alt: "WAW Promo 5",
            },
          ].map((item, index) => (
            <CarouselItem key={`carousel-item-${index}`}>
              <div className="p-2 h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={cn(
                    "w-full h-full object-cover rounded-2xl",
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {Array.from({ length: count }, (_, index) => (
            <div
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                {
                  "bg-[#d14f4f] shadow-lg scale-125": index + 1 === current,
                  "bg-white/70 hover:bg-white/90": index + 1 !== current,
                },
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
