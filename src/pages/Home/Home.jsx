import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import Newsletter from "./components/Newsletter";
import PopularCategories from "./components/PopularCategories";
import PromotionalVideo from "./components/PromotionalVideo";
import UpcomingEvents from "./components/UpcomingEvents";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <UpcomingEvents />
      <PopularCategories />
      <PromotionalVideo />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
      <Blogs />
      <Newsletter />
    </div>
  );
}
