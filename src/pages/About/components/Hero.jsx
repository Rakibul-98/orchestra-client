import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/M5jVjjxJ/event-5.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-fadeIn text-yellow-400">
          Welcome to <span className="text-white">Orchestra</span>
        </h1>
        <p className="my-4 text-lg md:text-xl text-gray-200 animate-fadeIn delay-150">
          Crafting unforgettable events, one experience at a time.
        </p>

        <p className="text-gray-300">
          At <span className="font-bold text-yellow-400">Orchestra</span>
          <sup className="text-[10px]">TM</sup>, we orchestrate every detail to
          perfection. From corporate events to weddings, concerts to private
          parties — our expert team ensures your event leaves a lasting
          impression. Let us bring your vision to life with creativity and
          precision!
        </p>

        <div className="mt-6">
          <Link
            to="/events"
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-800 rounded-md shadow-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Events 🎉
          </Link>
        </div>
      </div>
    </section>
  );
}
