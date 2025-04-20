import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Animation classes using Tailwind
const animations = {
  fadeIn: "animate-fadeIn opacity-0",
  slideInRight: "animate-slideInRight translate-x-full",
  slideInLeft: "animate-slideInLeft -translate-x-full",
  scaleUp: "animate-scaleUp scale-0",
  bounceIn: "animate-bounceIn scale-0",
};

// Example slide structure - replace with your content
const slides = [
  {
    id: 1,
    background: "bg-black",
    elements: [
      {
        type: "title",
        content: "THE ONLY 10 SLIDES",
        animation: "bounceIn",
        className: "text-7xl font-bold text-white mb-4"
      },
      {
        type: "subtitle",
        content: "YOU NEED IN A",
        animation: "fadeIn",
        delay: "delay-300",
        className: "text-4xl text-white tracking-[0.3em] mb-4"
      },
      {
        type: "title",
        content: "PITCH",
        animation: "slideInRight",
        delay: "delay-500",
        className: "text-8xl font-bold text-white mb-12"
      },
      {
        type: "points",
        content: [
          "The purpose of a pitch is to stimulate interest, not to cover every aspect of your startup and bludgeon your audience into submission.",
          "your objective is to generate enough interest to get a second meeting."
        ],
        animation: "fadeIn",
        delay: "delay-700",
        className: "text-xl text-white space-y-6"
      },
      {
        type: "subtitle",
        content: "Thus, the recommended number of slides for a pitch is ten. This impossibly low number forces you to concentrate on the absolute essentials. You can add a few more, but you should never exceed fifteen slides -- the more slides you need, the less compelling your idea.",
        animation: "fadeIn",
        delay: "delay-900",
        className: "text-xl text-[#00E5E5] mt-8"
      }
    ]
  },
  {
    id: 2,
    background: "bg-gradient-to-br from-[#2A2F3D] via-[#1A1F2C] to-[#2A2F3D]",
    elements: [
      {
        type: "title",
        content: "Our Solution",
        animation: "bounceIn",
        className: "text-6xl font-bold text-[#9b87f5] mb-8"
      },
      {
        type: "points",
        content: [
          "Innovative value control technology",
          "Advanced management solutions",
          "Customizable for your needs"
        ],
        animation: "slideInRight",
        delay: "delay-300",
        className: "text-xl text-[#E5DEFF] space-y-4"
      }
    ]
  },
  {
    id: 3,
    background: "bg-gradient-to-br from-[#2A2F3D] via-[#1A1F2C] to-[#2A2F3D]",
    elements: [
      {
        type: "title",
        content: "Get in Touch",
        animation: "bounceIn",
        className: "text-6xl font-bold text-[#9b87f5] mb-8"
      },
      {
        type: "subtitle",
        content: "Ready to learn more about ValCtrl?",
        animation: "fadeIn",
        delay: "delay-300",
        className: "text-3xl text-[#E5DEFF] mb-12"
      },
      {
        type: "points",
        content: [
          "Contact us today",
          "Schedule a demo",
          "Join our community"
        ],
        animation: "slideInRight",
        delay: "delay-500",
        className: "text-xl text-[#E5DEFF] space-y-4"
      }
    ]
  }
];

interface PitchDeckProps {
  isVisible: boolean;
  onClose: () => void;
}

const PitchDeck = ({ isVisible, onClose }: PitchDeckProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  if (!isVisible) return null;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderElement = (element: any) => {
    const baseAnimationClass = animations[element.animation as keyof typeof animations];
    const animationClass = element.delay ? `${baseAnimationClass} ${element.delay}` : baseAnimationClass;

    switch (element.type) {
      case "title":
      case "subtitle":
        return (
          <div className={`${element.className} ${animationClass}`}>
            {element.content}
          </div>
        );
      case "image":
        return (
          <img 
            src={element.src} 
            alt="Slide content"
            className={`${element.className} ${animationClass}`}
          />
        );
      case "points":
        return (
          <ul className={`${element.className} ${animationClass}`}>
            {element.content.map((point: string, index: number) => (
              <li 
                key={index}
                className="flex items-center bg-[#1A1F2C]/50 p-4 rounded-lg mb-4"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5] mr-4" />
                {point}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-8">
      <div className="relative w-[90vw] h-[90vh]">
        <Button
          variant="ghost"
          className="absolute right-4 top-4 text-[#E5DEFF] hover:text-[#9b87f5] z-50"
          onClick={onClose}
        >
          Close
        </Button>

        <div className={`w-full h-full rounded-2xl p-12 ${slides[currentSlide].background} shadow-2xl overflow-hidden`}>
          <div className="flex flex-col items-center justify-center h-full">
            {slides[currentSlide].elements.map((element, index) => (
              <div key={index} className="w-full">
                {renderElement(element)}
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-12">
            <Button
              variant="ghost"
              className="text-[#E5DEFF] hover:text-[#9b87f5] p-8"
              onClick={prevSlide}
              disabled={isAnimating}
            >
              <ArrowLeft className="h-8 w-8" />
            </Button>
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#9b87f5]" : "bg-[#7E69AB]/40"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              className="text-[#E5DEFF] hover:text-[#9b87f5] p-8"
              onClick={nextSlide}
              disabled={isAnimating}
            >
              <ArrowRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck; 