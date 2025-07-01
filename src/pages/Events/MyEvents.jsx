import { useState } from "react";
import { format } from "date-fns";
import UpdateModal from "./UpdateModal";

const dummyMyEvents = [
  {
    id: 1,
    title: "Symphony Under the Stars",
    name: "John Doe",
    datetime: new Date("2029-04-20T19:00:00"),
    location: "Sunset Park, Los Angeles, CA",
    description: "A beautiful evening of music under the night sky.",
    attendees: 75,
  },
  {
    id: 2,
    title: "Tech Future Expo",
    name: "John Doe",
    datetime: new Date("2029-06-01T10:00:00"),
    location: "Silicon Valley, San Jose, CA",
    description: "Explore the latest in technology and innovation.",
    attendees: 55,
  },
];

export default function MyEvents() {
  const [myEvents, setMyEvents] = useState(dummyMyEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updateForm, setUpdateForm] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleDelete = () => {
    setMyEvents((prev) =>
      prev.filter((event) => event.id !== eventToDelete.id)
    );
    setShowDeleteModal(false);
    setEventToDelete(null);
  };

  const openDeleteModal = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };

  const openUpdateModal = (event) => {
    setSelectedEvent(event);
    setUpdateForm({
      title: event.title,
      name: event.name,
      datetime: format(event.datetime, "yyyy-MM-dd'T'HH:mm"),
      location: event.location,
      description: event.description,
    });
    setShowModal(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setMyEvents((prev) =>
      prev.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, ...updateForm, datetime: new Date(updateForm.datetime) }
          : event
      )
    );
    setShowModal(false);
  };

  return (
    <div className="py-6 w-[92%] mx-auto">
      <h1 className="text-3xl font-bold mb-6  text-gray-800">My Events</h1>

      {myEvents.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not added any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {myEvents.map((event) => (
            <div className="card shadow-lg rounded-2xl overflow-hidden flex flex-col p-4 space-y-1.5">
              <h3 className="card-title text-lg font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className=" text-sm">{event.description}</p>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm">Posted by: {event.name}</p>
                <p className="text-gray-600 text-sm">
                  {format(event.datetime, "PPP p")}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm">{event.location}</p>

                <p className="text-sm mt-1 ">Attendees: {event.attendees}</p>
              </div>
              <div className="gap-2 mt-auto flex justify-between">
                <button
                  className="px-4 py-1 text-sm bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 transition w-1/2"
                  onClick={() => openUpdateModal(event)}
                >
                  Update
                </button>
                <button
                  className="px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition w-1/2"
                  onClick={() => openDeleteModal(event)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      {showModal && (
        <UpdateModal
          updateForm={updateForm}
          handleUpdateChange={handleUpdateChange}
          handleUpdateSubmit={handleUpdateSubmit}
          setShowModal={setShowModal}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Confirm Deletion
            </h2>
            <p className=" mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{eventToDelete.title}</span>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1 border border-gray-300  rounded hover:bg-gray-100"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
