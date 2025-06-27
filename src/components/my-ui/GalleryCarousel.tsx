import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/my-ui/carousel";

export function GalleryCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto h-[400px]">
      <Carousel className="relative h-[400px]">
        <CarouselContent className="h-[400px]">
          <CarouselItem>
            <div className="p-1 h-[400px] flex items-center justify-center">
              <img
                src="/fabiana-1.jpg"
                alt="Fabiana - Image 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1 h-[400px] flex items-center justify-center">
              <img
                src="/fabiana-2.jpg"
                alt="Fabiana - Image 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
