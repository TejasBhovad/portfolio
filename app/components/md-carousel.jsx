"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function MDCarousel({ images = [], className = "" }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const sampleImages = [
    {
      src: "/api/placeholder/800/450",
      alt: "SoundXLR Soundboard Interface - Create custom soundboards",
    },
    {
      src: "/api/placeholder/800/450",
      alt: "SoundXLR App - Share soundboards on the web",
    },
    {
      src: "/api/placeholder/800/450",
      alt: "SoundXLR Dashboard - Manage your sound collections",
    },
  ];

  const displayImages = images.length > 0 ? images : sampleImages;

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

  const scrollTo = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <Carousel className="relative w-full group" setApi={setApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/2"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform bg-foreground">
                <CardContent className="p-0 relative overflow-hidden rounded-lg">
                  <div className="aspect-video relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Optional overlay with image info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-accent text-sm font-medium truncate">
                      {image.alt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom styled navigation buttons */}
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 w-12 h-12 bg-base   border-2 border-muted/20 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110">
          <ChevronLeft className="h-5 w-5 text-baseColor" />
        </CarouselPrevious>

        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 w-12 h-12 bg-base   border-2 border-muted/20 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110">
          <ChevronRight className="h-5 w-5 text-baseColor" />
        </CarouselNext>

        {/* Interactive dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                current === index + 1
                  ? "bg-primary shadow-lg"
                  : "bg-muted/80 hover:bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
