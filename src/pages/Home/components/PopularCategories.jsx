import { Link } from "react-router-dom";
import musicImg from "../../../assets/images/music.jpg";
import sportsImg from "../../../assets/images/sport.jpg";
import workshopImg from "../../../assets/images/workshop.jpg";
import communityImg from "../../../assets/images/community.jpg";

const categories = [
  { name: "Music", image: musicImg },
  { name: "Sports", image: sportsImg },
  { name: "Workshops", image: workshopImg },
  { name: "Community", image: communityImg },
];

export default function PopularCategories() {
  return (
    <section className="w-[92%] mx-auto my-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-4 border-yellow-400 pb-1 w-fit">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map(({ name, image }) => (
          <Link
            key={name}
            to={`/events?category=${encodeURIComponent(name)}`}
            className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition cursor-pointer"
          >
            <img
              src={image}
              alt={name}
              className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
            />
            <span className="text-lg font-medium">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
