import { useState, useEffect } from "react";
import event1 from "../../../assets/images/event (1).jpg";
import event2 from "../../../assets/images/event (2).jpg";
import event3 from "../../../assets/images/event (3).jpg";
import event4 from "../../../assets/images/event (4).jpg";
import event5 from "../../../assets/images/event (5).jpg";
import { Link } from "react-router-dom";

const images = [
  {
    src: event1,
    title: "Live Concerts & Music Festivals",
    description: "Discover the best sound experiences around the world.",
  },
  {
    src: event2,
    title: "Tech Conferences & Expos",
    description: "Stay ahead with groundbreaking innovations and talks.",
  },
  {
    src: event3,
    title: "Wellness & Health Retreats",
    description: "Relax, rejuvenate, and find your balance.",
  },
  {
    src: event4,
    title: "Creative Art & Fashion Shows",
    description: "Witness art come to life on stage and canvas.",
  },
  {
    src: event5,
    title: "Food, Culture & Culinary Delights",
    description: "Taste the world at our exclusive gourmet events.",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8 md:p-16 text-white max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold relative">
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transition-all duration-500"></span>
                  {image.title}
                </h2>
                <p className="text-lg md:text-xl mb-5">{image.description}</p>
                <Link
                  to="/events"
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 font-semibold rounded-md transition-all"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
