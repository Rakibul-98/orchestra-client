import { useForm } from "react-hook-form";
import newsletter from "../../../assets/newsletter.svg";
import toast from "react-hot-toast";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email) {
      toast.success("Thanks for subscribing to Orchestra!");
      reset();
    }
  };

  return (
    <section className="w-[92%] mx-auto my-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={newsletter}
            alt="Newsletter"
            className="lg:w-[70%] mx-auto md:mx-0"
          />
        </div>

        <div>
          <h2 className="text-3xl font-mono font-semibold border-b-4 border-yellow-400 w-fit text-gray-800">
            Stay Connected
          </h2>
          <p className="my-2 text-gray-700">
            Be the first to know about upcoming events, exclusive offers, and
            the latest from Orchestra.
          </p>
          <p className="mb-6 text-sm italic w-[90%] text-gray-600">
            We promise no spam — just inspiring stories, special announcements,
            and event highlights delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full">
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-yellow-400`}
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
