"use client";
import React, { useState } from "react";
import {
    CaretCircleLeft,
    CaretCircleRight,
} from "@phosphor-icons/react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CarouselProps {
    items: React.ReactNode[];
}

type Card = {
    src: string;
    title: string;
};

export const Carousel = ({ items }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full max-w-xs md:max-w-4xl mx-auto h-[500px] md:h-[650px] flex flex-col items-center justify-center group">

            {/* Left Arrow */}
            <button
                className="absolute left-2 md:left-24 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform pointer-events-auto z-50"
                onClick={handlePrev}
            >
                <CaretCircleLeft size={32} weight="duotone" />
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-2 md:right-20 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform pointer-events-auto z-50"
                onClick={handleNext}
            >
                <CaretCircleRight size={32} weight="duotone" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {items.map((item, index) => {
                    const distance = (index - currentIndex + items.length) % items.length;

                    // Only render current, next, and previous to maintain stack illusion
                    if (distance !== 0 && distance !== 1 && distance !== items.length - 1) return null;

                    const isCurrent = distance === 0;
                    const isNext = distance === 1;

                    return (
                        <motion.div
                            key={"card" + index}
                            className={cn(
                                "absolute top-0 w-full h-full flex items-center justify-center",
                                isCurrent ? "z-20" : isNext ? "z-10" : "z-0"
                            )}
                            animate={{
                                scale: isCurrent ? 1 : 0.9,
                                opacity: isCurrent ? 1 : isNext ? 0.6 : 0,
                                x: isCurrent ? 0 : isNext ? 40 : -50,
                                rotate: isCurrent ? 0 : isNext ? 3 : -5,
                                zIndex: isCurrent ? 20 : isNext ? 10 : 0
                            }}
                            transition={{
                                duration: 0,
                            }}
                        >
                            <div className="w-[280px] md:w-[350px] h-full">
                                {item}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-2 flex gap-2 justify-center z-50">
                {items.map((_, index) => (
                    <button
                        key={"dot" + index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            currentIndex === index
                                ? "w-8 bg-light-text dark:bg-dark-text"
                                : "w-2 bg-light-text/20 dark:bg-dark-text/20 hover:bg-light-text/40 dark:hover:bg-dark-text/40"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export const Card = ({
    card,
}: {
    card: Card;
}) => {
    return (
        <div
            className="bg-transparent w-full h-full flex items-center justify-center pb-10"
        >
            <BlurImage
                src={card.src}
                alt={card.title}
                width={350} // Approximate width to help layout, but CSS rules
                height={800}
                className="h-full w-auto object-contain rounded-[2rem] mx-auto"
            />
        </div>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: any) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
