import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/my-ui/carousel";

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
    <div className="w-full mx-auto aspect-[4/3]">
      <Carousel setApi={setApi} className="relative h-full">
        <CarouselContent className="h-full">
          <CarouselItem>
            <div className="p-1 h-full flex items-center justify-center">
              <img
                src="/fabiana-1.jpg"
                alt="Fabiana - Image 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1 h-full flex items-center justify-center">
              <img
                src="/fabiana-2.jpg"
                alt="Fabiana - Image 2"
                className="w-full h-full object-cover rounded-lg shadow-lg object-top"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: count }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index + 1 === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
