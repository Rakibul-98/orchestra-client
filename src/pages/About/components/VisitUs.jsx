import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function VisitUs() {
  const contactInfo = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-yellow-400 text-2xl" />,
      label: "Address",
      value: "Banani, Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: <FaPhone className="text-yellow-400 text-2xl" />,
      label: "Phone",
      value: "+880 1000 000000",
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-yellow-400 text-2xl" />,
      label: "Email",
      value: "contact@orchestra-events.com",
    },
    {
      id: 4,
      icon: <FaClock className="text-yellow-400 text-2xl" />,
      label: "Office Hours",
      value: (
        <>
          Mon - Fri: 9:00 AM - 6:00 PM <br />
          Sat: 10:00 AM - 3:00 PM
        </>
      ),
    },
  ];

  return (
    <section className="w-[90%] mx-auto my-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Visit Us 📍</h2>
        <p className="text-gray-600 mt-3">
          Planning an event? We'd love to meet you. Visit our office and let's
          bring your vision to life!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {item.icon}
              <div>
                <p className="font-semibold text-gray-800">{item.label}</p>
                <p className="text-lg text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 w-full h-[300px] md:h-[400px]">
          <iframe
            title="Orchestra Location"
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.480181169765!2d90.40079347350956!3d23.79601649469935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7193794ed05%3A0x4c049e601c1d2260!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1740022653300!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
