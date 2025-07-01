import {
  FaCalendarPlus,
  FaListAlt,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaCalendarPlus size={30} className="text-teal-500" />,
      title: "Add Events",
      desc: "Authorized users can add new events through the 'Add Event' page. Provide all details like title, date, location, and description.",
    },
    {
      icon: <FaListAlt size={30} className="text-orange-500" />,
      title: "View Events",
      desc: "All added events appear on the Events page, sorted by most recent date and time, so you never miss what's happening.",
    },
    {
      icon: <FaSearch size={30} className="text-purple-500" />,
      title: "Search Events",
      desc: "Easily find events by title using the quick search system built right into the Events page.",
    },
    {
      icon: <FaUserPlus size={30} className="text-green-500" />,
      title: "Join Events",
      desc: "See something you like? Click 'Join Event' to participate! Each user can only join an event once, and attendee counts update instantly.",
    },
  ];

  return (
    <section className="w-[92%] mx-auto my-20 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
