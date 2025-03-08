import Sales from "@/components/Home/Sales";
import StaffCard from "@/components/StaffCard";
import TickedList from "@/components/TickedList";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <section className="section md:flex justify-center py-20 gap-4 items-center">
        <div className="md:flex-1">
          <Card className="bg-secondary-500 py-1 px-2 rounded-none w-fit text-gray-00 mb-4">
            WHO WE ARE
          </Card>
          <p className="md:text-[40px] text-[26px] font-semibold leading-tight pb-3">
            GiltzMart - Your Ultimate Destination for Electronics.
          </p>
          <p className="pb-4 text-gray-700 text-[16px]">
            At GiltzMart, we bring you the latest and most innovative electronics at unbeatable prices. With a commitment to quality and customer satisfaction, we have built a reputation as a trusted global retailer. Our extensive catalog ensures you find exactly what you need, when you need it.
          </p>

          <div>
            <TickedList subject="Exceptional 24/7 customer support." />
            <TickedList subject="A dedicated team of over 600 professionals." />
            <TickedList subject="50+ stores worldwide for easy access." />
            <TickedList subject="Over 1 million top-quality electronics products." />
          </div>
        </div>
        <div className="md:flex-1 ">
          <img
            src="/images/about-us-image.png"
            alt="Customer with our team member"
            width={648}
            height={732}
          />
        </div>
      </section>

      <hr className="my-4 border-gray-300 w-full" />

      <section className="section py-8">
        <p className="flex justify-center text-[32px] font-semibold pb-5">
          Meet Our Leadership Team
        </p>
        <div className="grid md:grid-cols-4  grid-cols-2 gap-3">
          <StaffCard name="Kevin Gilbert" role="Chief Executive Officer" img="/images/staff1.png" />
          <StaffCard name="Lisa Moore" role="Assistant to CEO" img="/images/staff2.png" />
          <StaffCard name="Michael Jordan" role="Head of Design" img="/images/staff3.png" />
          <StaffCard name="Anna Collins" role="Lead Engineer" img="/images/staff4.png" />
          <StaffCard name="Samuel Lee" role="UX Designer" img="/images/staff5.png" />
          <StaffCard name="Emma Watson" role="UI Designer" img="/images/staff6.png" />
          <StaffCard name="John Carter" role="Product Designer" img="/images/staff7.png" />
          <StaffCard name="Sophia Clark" role="Head of Development" img="/images/staff8.png" />
        </div>
      </section>

      <div
        className="bg-cover bg-center h-[360px] my-6 flex items-center"
        style={{ backgroundImage: "url('/images/aboutbg.png')" }}
      >
        <div className="section py">
          <div className="md:w-[25vw]">
            <p className="text-gray-900 md:text-[32px] text-2xl font-semibold leading-tight py-6">
              Your Trusted Electronics Partner
            </p>
            <p className="text-gray-900 ">
              Experience the future of shopping with GiltzMart. From top brands to exclusive deals, we ensure premium quality and exceptional service for all your tech needs.
            </p>
            <img
              src="/images/about-btn.png"
              alt="Explore Now"
              width={50}
              className="py-5"
            />
          </div>
        </div>
      </div>

      <section>
        <Sales />
      </section>

      <section className="bg-secondary-700 flex justify-center">
        <div className="section md:w-[60vw] py-10 ">
          <p className="text-[32px] text-center text-gray-00 font-semibold py-3">
            Stay Updated with Our Newsletter
          </p>
          <p className="text-gray-100 text-[16px] text-center ">
            Subscribe for exclusive deals, latest tech trends, and more from GiltzMart. Be the first to know what's new!
          </p>

          <div className="w-full flex justify-center bg-white px-3 py-3 my-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[40px] px-5 "
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-700 text-white flex justify-center items-center gap-2 px-5"
            >
              SUBSCRIBE
              <i className="fa fa-long-arrow-right"></i>
            </button>
          </div>
          <div className="flex gap-5 justify-center">
            <a href="#">
              <img src="/images/googlelogo.png" alt="Google" width={72} />
            </a>
            <a href="#">
              <img src="/images/amazon.png" alt="Amazon" width={72} />
            </a>
            <a href="#">
              <img src="/images/phillip.png" alt="Phillips" width={72} />
            </a>
            <a href="#">
              <img src="/images/toshiba.png" alt="Toshiba" width={72} />
            </a>
            <a href="#">
              <img src="/images/samsung.png" alt="Samsung" width={72} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
