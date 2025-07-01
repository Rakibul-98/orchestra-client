export default function UpdateModal({
  updateForm,
  handleUpdateChange,
  handleUpdateSubmit,
  setShowModal,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Update Event
        </h2>
        <form onSubmit={handleUpdateSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              name="title"
              value={updateForm.title}
              onChange={handleUpdateChange}
              className="input input-bordered w-full  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              value={updateForm.name}
              onChange={handleUpdateChange}
              className="input input-bordered w-full  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="datetime"
              value={updateForm.datetime}
              onChange={handleUpdateChange}
              className="input input-bordered w-full  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              name="location"
              value={updateForm.location}
              onChange={handleUpdateChange}
              className="input input-bordered w-full  focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={updateForm.description}
              onChange={handleUpdateChange}
              className="textarea textarea-bordered w-full  focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
