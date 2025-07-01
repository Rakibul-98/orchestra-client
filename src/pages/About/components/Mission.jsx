import { FaGlobe, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

export default function Mission() {
  const valuesData = [
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description:
        "We bring world-class event experiences to audiences near and far.",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description:
        "We foster meaningful connections and unforgettable shared moments.",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Trust, transparency, and dedication are at our core.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creativity",
      description:
        "We infuse every event with fresh ideas and captivating experiences.",
    },
  ];

  return (
    <section className="w-[90%] mx-auto my-16">
      <div>
        <div className="text-center mb-12 flex justify-center">
          <h2 className="text-4xl font-mono border-b-4 border-yellow-400 w-fit pb-1 text-gray-800">
            Our Mission & Values 🎤
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-yellow-400 text-4xl mb-3 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
