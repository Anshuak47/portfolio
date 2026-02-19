import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container p-5 max-w-fit">
      <div className="flex sm:flex-row justify-center md:justify-start">
        <div className="grid sm:grid-cols-12 gap-2">
          <div className="p-8 col-span-7">
            <span className="text-link">Available for hire</span>
            <h1 className="leading-[1.2]">Anshu Kushwaha</h1>
            <p className="leading-[1.2] text-2xl py-2">
              Full-Stack WordPress Developer Building Scalable, High-Performance
              Web Solutions
            </p>
            <p className="py-2">
              Professional WordPress and React developer specializing in custom
              theme development, plugin architecture, API integrations, and
              performance optimization. I build scalable, secure, and
              SEO-friendly web applications that deliver measurable results.
            </p>
            <button className="my-2 dark">Explore My Work</button>
          </div>
          <div className="hidden w-[70%] mx-auto sm:block col-span-5">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/anshcr7/image/upload/v1771479435/Anshu_-_portfolio_-transparent_va6qdc.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full my-10 pr-10 pl-10">
        <ul className="text-white gap-10 flex sm:flex flex-row tech">
          <li className="text-blue-800">
            <IoLogoHtml5 />
          </li>
          <li className="text-amber-800">
            <FaCss3Alt />
          </li>
          <li className="text-yellow-400">
            <FaJs />
          </li>
          <li className="text-blue-600">
            <FaPhp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
