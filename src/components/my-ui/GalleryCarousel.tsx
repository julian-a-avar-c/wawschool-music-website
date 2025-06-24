import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/my-ui/carousel";

export function GalleryCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem><div>1</div></CarouselItem>
        <CarouselItem><div>2</div></CarouselItem>
        <CarouselItem><div>3</div></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
