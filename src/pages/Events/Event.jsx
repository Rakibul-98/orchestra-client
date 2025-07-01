import { useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subWeeks,
  subMonths,
} from "date-fns";

const dummyEvents = [
  {
    id: 1,
    title: "Symphony Under the Stars",
    location: "Sunset Park, Los Angeles, CA",
    datetime: new Date("2029-04-20T19:00:00"),
    attendees: 75,
    price: "$50",
    image: "/images/event1.jpg",
  },
  {
    id: 2,
    title: "Tech Future Expo",
    location: "Silicon Valley, San Jose, CA",
    datetime: new Date("2029-06-01T10:00:00"),
    attendees: 55,
    price: "$80",
    image: "/images/event2.jpg",
  },
  {
    id: 3,
    title: "Creative Arts Festival",
    location: "Downtown Gallery, Chicago, IL",
    datetime: new Date("2029-05-15T14:00:00"),
    attendees: 120,
    price: "$30",
    image: "/images/event3.jpg",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(dummyEvents);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRange, setSelectedRange] = useState("");
  const [joinedEvents, setJoinedEvents] = useState([]);

  const handleJoin = (id) => {
    if (!joinedEvents.includes(id)) {
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === id ? { ...ev, attendees: ev.attendees + 1 } : ev
        )
      );
      setJoinedEvents((prev) => [...prev, id]);
    }
  };

  const getRangeDates = (range) => {
    const now = new Date();
    switch (range) {
      case "currentWeek": {
        return [startOfWeek(now), endOfWeek(now)];
      }
      case "lastWeek": {
        const lastWeek = subWeeks(now, 1);
        return [startOfWeek(lastWeek), endOfWeek(lastWeek)];
      }
      case "currentMonth": {
        return [startOfMonth(now), endOfMonth(now)];
      }
      case "lastMonth": {
        const lastMonth = subMonths(now, 1);
        return [startOfMonth(lastMonth), endOfMonth(lastMonth)];
      }
      default:
        return [null, null];
    }
  };

  const filteredEvents = events
    .filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
    .filter((event) => {
      const eventDate = new Date(format(event.datetime, "yyyy-MM-dd"));

      if (selectedRange) {
        const [start, end] = getRangeDates(selectedRange);
        return eventDate >= start && eventDate <= end;
      } else if (selectedDate) {
        return format(event.datetime, "yyyy-MM-dd") === selectedDate;
      }
      return true;
    })
    .sort((a, b) => b.datetime - a.datetime);

  const disableSingleDate = selectedRange !== "";

  return (
    <div className="py-6 w-[91%] mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full sm:w-64 max-w-xs"
        />

        {/* Single Date Picker */}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="input input-bordered w-full sm:w-44 max-w-xs"
          disabled={disableSingleDate}
          title={disableSingleDate ? "Disabled while date range is active" : ""}
        />

        {/* Date Range Dropdown */}
        <select
          className="select select-bordered w-full sm:w-52 max-w-xs"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="">Select Date Range</option>
          <option value="currentWeek">Current Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="currentMonth">Current Month</option>
          <option value="lastMonth">Last Month</option>
        </select>

        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            setSearch("");
            setSelectedDate("");
            setSelectedRange("");
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            No events found.
          </p>
        )}

        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="card bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <figure>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 object-cover bg-gray-100"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title text-lg font-semibold">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm">{event.location}</p>
              <p className="text-gray-600 text-sm">
                {format(event.datetime, "PPP p")}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-yellow-500 font-semibold">{event.price}</p>
                <p className="text-sm text-right">
                  Attendees: {event.attendees}
                </p>
              </div>
              <div className="card-actions mt-2">
                <button
                  className={`btn btn-sm w-full text-gray-900 ${
                    joinedEvents.includes(event.id)
                      ? "btn-success cursor-default"
                      : "btn-warning"
                  }`}
                  onClick={() => handleJoin(event.id)}
                  disabled={joinedEvents.includes(event.id)}
                  title={
                    joinedEvents.includes(event.id)
                      ? "You have joined this event"
                      : "Join this event"
                  }
                >
                  {joinedEvents.includes(event.id) ? "Joined" : "Join Event"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
