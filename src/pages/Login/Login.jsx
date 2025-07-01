import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../util/verifyToken";
import loginImg from "../../assets/login.svg";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user, token: res.data.token }));

      toast.success("Login successful!");

      const dashboardPath = `/${user?.role?.toLowerCase()}Dashboard`;

      const from = location.state?.from;
      if (!from || from.includes("Dashboard")) {
        navigate(dashboardPath, { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message || "Login failed! Invalid credentials!!";
      toast.error(errorMessage);
    }
  };

  const handleUserLoginFill = () => {
    setValue("email", "user@example.com");
    setValue("password", "12345");
  };

  const handleAdminLoginFill = () => {
    setValue("email", "admin@example.com");
    setValue("password", "123456");
  };

  return (
    <div className="w-[91%] mx-auto my-5 min-h-[70vh] md:flex justify-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={loginImg} alt="Login" className="w-[70%]" />
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <div className="shadow-lg rounded-lg p-8 h-fit bg-white">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Welcome Back! 👋
          </h2>

          <div className="flex gap-3 my-3">
            <button
              type="button"
              onClick={handleUserLoginFill}
              className="w-1/2 border border-yellow-400 text-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition"
            >
              User Login
            </button>
            <button
              type="button"
              onClick={handleAdminLoginFill}
              className="w-1/2 border border-yellow-400 text-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-400 hover:text-gray-800 transition"
            >
              Admin Login
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 text-gray-800 font-semibold">
                User email
              </label>
              <input
                {...register("email", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
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
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-800 mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-yellow-400 underline hover:text-yellow-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
