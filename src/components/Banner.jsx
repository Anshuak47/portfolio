import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container p-5 max-w-fit">
      <div className="flex sm:flex-row justify-center md:justify-start">
        <div className="grid sm:grid-cols-2 text-center gap-2">
          <div className="">
            <p className="text-link">Available for hire</p>
            <h1 className="leading-[1.3]">Anshu Kushwaha</h1>
            <p className="leading-[1.3] text-2xl">
              WordPress FullStack Developer
            </p>
          </div>
          <div className="sm:w-1/2 hidden sm:block">
            <p>Banner</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center my-10">
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
