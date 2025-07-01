import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import logo from "../assets/orchestra.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Contact"],
    },
    {
      title: "Legal",
      links: ["Terms of use"],
    },
  ];

  const socialLinks = [
    {
      icon: <FiFacebook />,
      url: "https://facebook.com/bikesolution",
      className: "hover:bg-blue-600 hover:border-blue-600",
    },
    {
      icon: <FaXTwitter />,
      url: "https://twitter.com/bikesolution",
      className: "hover:bg-black hover:border-black",
    },
    {
      icon: <FiInstagram />,
      url: "https://instagram.com/bikesolution",
      className: "hover:bg-pink-500 hover:border-pink-500",
    },
    {
      icon: <FiLinkedin />,
      url: "https://linkedin.com/company/bikesolution",
      className: "hover:bg-[#0077B5] hover:border-[#0077B5]",
    },
    {
      icon: <FiYoutube />,
      url: "https://youtube.com/bikesolution",
      className: "hover:bg-red-600 hover:border-red-600",
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 pt-14 pb-4 select-none">
      <div className="w-[92%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left: Logo + Socials */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-5">
          <Link to="/" aria-label="Homepage">
            <img className="h-20" src={logo} alt="Orchestra Logo" />
          </Link>
          <p className="text-yellow-400 font-semibold text-lg tracking-wide">
            Orchestra Event Management Ltd.
          </p>
          <div className="flex space-x-5 text-2xl">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${
                  link.url.split("//")[1].split(".")[0]
                } page`}
                className={`border border-gray-600 p-3 rounded-full text-gray-300 shadow-sm transition-transform duration-300 ${link.className}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Links */}
        <div className="md:col-span-4 flex justify-around md:justify-center space-x-12">
          {footerLinks.map((section, i) => (
            <nav
              key={i}
              aria-label={section.title}
              className="space-y-5 min-w-[120px]"
            >
              <h6 className="text-yellow-400 font-bold text-lg border-b-2 border-yellow-400 pb-1">
                {section.title}
              </h6>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Right: Map */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="w-full h-48 rounded-md shadow-lg overflow-hidden">
            <iframe
              title="Bike Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.77046430682!2d90.36453464890553!3d23.802854858150777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1740022653300!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Orchestra Event Management Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}
