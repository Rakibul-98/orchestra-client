import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import event1 from "../../../assets/images/event (1).jpg";
import event2 from "../../../assets/images/event (2).jpg";
import event3 from "../../../assets/images/event (3).jpg";
import event4 from "../../../assets/images/event (4).jpg";

const blogPosts = [
  {
    id: 1,
    title: "Event Planning Tips for a Stress-Free Celebration",
    description:
      "Discover expert tips to simplify your event planning process. From timelines to vendor coordination, learn how to host an unforgettable celebration with ease.",
    image: event1,
    link: "https://example.com/event-planning-tips",
    author: "Sophia Rahman",
    date: "June 20, 2025",
    comments: 14,
  },
  {
    id: 2,
    title: "How to Create a Memorable Wedding Experience",
    description:
      "Your wedding should be as unique as your love story. Explore creative ideas and expert advice to craft an extraordinary wedding experience for you and your guests.",
    image: event2,
    link: "https://example.com/memorable-wedding",
    author: "Ayaan Chowdhury",
    date: "May 12, 2025",
    comments: 8,
  },
  {
    id: 3,
    title: "Why Corporate Events Matter for Your Brand",
    description:
      "Corporate events are more than meetings — they build culture, inspire teams, and elevate your brand presence. Learn why investing in them makes a lasting impact.",
    image: event3,
    link: "https://example.com/corporate-events",
    author: "Mehreen Sultana",
    date: "April 4, 2025",
    comments: 10,
  },
  {
    id: 4,
    title: "Top Trends in Event Design for 2025",
    description:
      "From immersive experiences to sustainable décor, discover the latest trends shaping the world of event design and production.",
    image: event4,
    link: "https://example.com/event-design-trends",
    author: "Rehan Kabir",
    date: "March 18, 2025",
    comments: 18,
  },
];

export default function Blogs() {
  return (
    <div className="w-[92%] mx-auto mt-16 pt-2">
      <div className="flex justify-center">
        <h1 className="text-3xl font-mono font-semibold mb-2 border-b-4 border-yellow-400 px-2 text-gray-800">
          Latest From Our Blog 📝
        </h1>
      </div>
      <p className="text-center text-gray-600 mb-8">
        Stay inspired with the latest insights, trends, and event success
        stories from Orchestra.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />

            <div className="py-2 px-4 flex flex-col flex-1">
              <div className="flex items-center text-gray-500 text-sm">
                <span>
                  {post.date} • {post.author}
                </span>
              </div>

              <h2 className="text-xl font-semibold my-2 text-ellipsis line-clamp-1 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm overflow-hidden text-ellipsis mb-3 line-clamp-2">
                {post.description}
              </p>

              <div className="mt-auto flex justify-between items-center border-t pt-2">
                <Link
                  to={post.link}
                  target="_blank"
                  className="text-yellow-400 underline hover:text-yellow-300 font-medium hover:underline"
                >
                  Read More ...
                </Link>

                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <FaRegCommentDots />
                  <span className="text-xs">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
