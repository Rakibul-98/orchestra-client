import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../features/counterSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { decrement, increment } from "../../redux/features/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    toast.success(`Hello, ${data.name}!`);
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="mb-6">
        <p className="text-xl mb-2">Counter: {count}</p>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-secondary"
        >
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          className="input input-bordered w-full"
          placeholder="Enter your name"
        />
        <button className="btn btn-accent">Submit</button>
      </form>
      <button className="btn btn-xl">Xlarge</button>
    </div>
  );
}
