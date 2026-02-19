import { BiChevronDown } from "react-icons/bi";
export default function Screen() {
  return (
    <div className="order-2 p-3 border border-white/15 rounded-xl shadow-2xl w-[50%]">
      <div className="relative backdrop-blur-sm border border-white/8 bg-liner-to-br from-gray-900/50 to-gray-800/30 rounded-lg overflow-hidden">
        {/* IDE Header */}
        <div className="flex justify-between items-center px-3 sm:px-4 bg-white/8 backdrop-blur-sm py-2 sm:py-3">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-300">
              WordPress Developer
            </span>
          </div>
          <div className="text-white">
            <BiChevronDown />
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/anshcr7/image/upload/v1771477239/WordPress_6.4_Dashboard_iwjy6x.png"
            alt="screen-image"
          />
        </div>
      </div>
    </div>
  );
}
