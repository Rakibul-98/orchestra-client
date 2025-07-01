import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.svg";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Registration logic here
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-5 min-h-[80vh] py-8">
      <div className="flex items-center justify-center md:w-1/2 mt-10 md:mt-0">
        <div className="shadow-lg rounded-lg p-8 h-fit bg-white">
          <h2 className="text-4xl font-bold text-center mb-6 border-b-4 px-2 border-yellow-400 text-gray-800">
            Create an Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 text-gray-800 font-semibold">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-800 font-semibold">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email address"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-800 font-semibold">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-800 font-semibold">
                Photo URL
              </label>
              <input
                type="url"
                {...register("photoURL", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none ${
                  errors.photoURL ? "border-red-500" : ""
                }`}
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-800 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-400 underline hover:text-yellow-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img src={registerImage} alt="Register" className="w-[70%]" />
      </div>
    </div>
  );
}
