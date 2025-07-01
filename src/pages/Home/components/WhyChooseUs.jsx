import { FaBolt, FaShieldAlt, FaUsers, FaHandsHelping } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: <FaBolt size={30} className="text-teal-500" />,
    title: "Lightning Fast",
    desc: "Experience instant event discovery and fast loading times across all devices.",
    bgColor: "bg-teal-100",
  },
  {
    icon: <FaShieldAlt size={30} className="text-orange-500" />,
    title: "Secure & Reliable",
    desc: "Your data and bookings are protected with industry-standard security protocols.",
    bgColor: "bg-orange-100",
  },
  {
    icon: <FaUsers size={30} className="text-purple-500" />,
    title: "Community Driven",
    desc: "Join a vibrant community of event organizers and attendees sharing experiences.",
    bgColor: "bg-purple-100",
  },
  {
    icon: <FaHandsHelping size={30} className="text-green-500" />,
    title: "Supportive Team",
    desc: "Our dedicated support team is always ready to help you with your event needs.",
    bgColor: "bg-green-100",
  },
];

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="w-[86%] mx-auto my-20">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Why Choose Orchestra?
      </h2>

      <div className="flex flex-col gap-20">
        {features.map(({ icon, title, desc, bgColor }, idx) => {
          const isLeft = idx % 2 === 0;
          const isVisible = visibleItems.includes(idx);

          return (
            <div
              key={title}
              ref={(el) => (refs.current[idx] = el)}
              data-index={idx}
              className={`relative flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`${bgColor} absolute top-0 w-full h-48 rounded-lg opacity-70 -z-10 ${
                  isLeft ? "-left-10" : "-right-10"
                }`}
              ></div>

              <div
                className={`
                  max-w-md p-8 rounded-lg shadow-lg bg-white
                  transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : isLeft
                      ? "translate-x-96 opacity-0"
                      : "-translate-x-96 opacity-0"
                  }
                `}
              >
                <div className="flex items-center gap-4 mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
