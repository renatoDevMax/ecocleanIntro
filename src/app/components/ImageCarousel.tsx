"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/imagem1.png", "/imagem2.png", "/imagem3.png", "/imagem4.png"];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full aspect-square relative overflow-hidden bg-[#EDF3F9] group">
      {/* Imagens */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Imagem ${index + 1}`}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Controles de Navegação */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-[#183263] transition-all duration-200 shadow-lg"
          aria-label="Imagem anterior"
        >
          <FaChevronLeft className="text-lg" />
        </button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#7EC13D] w-4"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-[#183263] transition-all duration-200 shadow-lg"
          aria-label="Próxima imagem"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
