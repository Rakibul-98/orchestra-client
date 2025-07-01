export default function OurStory() {
  return (
    <section className="w-[90%] mx-auto my-16">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full h-[300px] md:w-1/3 lg:w-1/2">
          <img
            src="https://i.ibb.co/0yRYWcyD/event-1.jpg"
            alt="Our Journey"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-mono border-b-4 border-yellow-400 w-fit pb-1">
            Our Story 🎶
          </h2>
          <div className="text-lg leading-relaxed md:text-sm lg:text-lg text-gray-700">
            <p>
              <span className="font-bold text-yellow-400">Orchestra</span> was
              founded with a simple belief — that every event deserves to feel
              extraordinary. What started as a small team of dreamers has
              blossomed into a trusted name in event management, known for
              creativity, precision, and passion.
            </p>
            <p className="mt-4">
              From intimate gatherings to grand celebrations, we handle every
              detail so you can enjoy the moment. Let us turn your vision into
              reality and create unforgettable memories together. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
