import { useGetAllProductsQuery } from "../../../redux/features/products/productsApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import EventCard from "../../Events/EventCard";

export default function UpcomingEvents() {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const products = data?.data?.result || [];
  const selectedProducts = products.slice(0, visibleCount);
  const skeletonCount = visibleCount - selectedProducts.length;

  return (
    <div className="mt-14 w-[92%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-yellow-400 pb-1">
          Upcoming Events
        </h2>
        <Link
          className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-3 py-[3px] rounded-full transition duration-300 hover:bg-yellow-400 hover:text-gray-800"
          to="/events"
        >
          View All <FaArrowRightLong />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {selectedProducts.map((product) => (
          <EventCard key={product._id} product={product} />
        ))}

        {(isLoading || error || skeletonCount > 0) &&
          Array.from({ length: isLoading ? visibleCount : skeletonCount }).map(
            (_, index) => (
              <div
                key={`skeleton-${index}`}
                className="p-4 border border-gray-300 rounded-lg shadow animate-pulse"
              >
                <div className="h-28 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 w-28 my-2 rounded"></div>
                <div className="h-4 bg-gray-300 w-full rounded"></div>
                <div className="h-4 bg-gray-300 w-full mt-1 rounded"></div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
