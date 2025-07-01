import { useForm } from "react-hook-form";
import addEventImg from "../../assets/add-event.svg";

export default function AddEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Event Data:", { ...data, attendeeCount: 0 });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {/* Left image section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={addEventImg} alt="Event Illustration" className="w-[70%]" />
      </div>

      {/* Right form section */}
      <div className="w-full lg:w-1/2 p-8 bg-white flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-mono">
            Add New Event
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Event Title *
              </label>
              <input
                {...register("title", { required: true })}
                className={`input input-bordered w-full focus:outline-none ${
                  errors.title ? "border-red-500" : ""
                }`}
                placeholder="Enter event title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name *
              </label>
              <input
                {...register("name", { required: true })}
                className={`input input-bordered w-full focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Posted by"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date & Time *
              </label>
              <input
                type="datetime-local"
                {...register("datetime", { required: true })}
                className={`input input-bordered w-full focus:outline-none ${
                  errors.datetime ? "border-red-500" : ""
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Location *
              </label>
              <input
                {...register("location", { required: true })}
                className={`input input-bordered w-full focus:outline-none ${
                  errors.location ? "border-red-500" : ""
                }`}
                placeholder="Enter location"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description *
            </label>
            <textarea
              {...register("description", { required: true })}
              className={`textarea textarea-bordered w-full focus:outline-none ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Event description"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded hover:bg-yellow-500 w-full"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
