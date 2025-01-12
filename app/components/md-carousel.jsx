import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MDCarousel({ images = [] }) {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={index}>
            <div className="p-1">
              <Card className="border-0">
                <CardContent className="flex aspect-video items-center justify-center p-0 rounded-md overflow-hidden border-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
