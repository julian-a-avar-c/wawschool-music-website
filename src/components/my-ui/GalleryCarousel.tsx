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
    <div className="w-full mx-auto aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#d14f4f]/20 shadow-lg">
      <Carousel setApi={setApi} className="relative h-full">
        <CarouselContent className="h-full rounded-3xl">
          <CarouselItem>
            <div className="p-2 h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
              <img
                src="/fabiana-1.jpg"
                alt="Fabiana - Image 1"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-2 h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
              <img
                src="/fabiana-2.jpg"
                alt="Fabiana - Image 2"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white object-top"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {Array.from({ length: count }, (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
                index + 1 === current
                  ? "bg-[#d14f4f] shadow-lg scale-125"
                  : "bg-white/70 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
