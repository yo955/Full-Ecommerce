interface CardProps {
  head: string;
  para: string;
  icon?: React.ElementType;
}

export const ServiceCard = ({ head, para, icon: Icon }: CardProps) => {
  return (
    <div className="flex flex-col justify-center text-center items-center mb-5 max-w-sm mx-auto group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 px-4 py-6 rounded-xl hover:bg-gradient-to-b hover:from-gray-50 hover:to-white hover:shadow-lg">
      {/* Icon Container */}
      <div className="relative mb-6">
        {/* Outer Ring */}
        <div className="rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-gray-200 to-gray-300 flex justify-center items-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-gray-100 group-hover:to-gray-200">
          {/* Inner Circle */}
          <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-800 to-black flex justify-center items-center text-white text-lg sm:text-xl md:text-2xl shadow-inner group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-300">
            {Icon && <Icon className="drop-shadow-sm" />}
          </div>
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gray-200 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
          {head}
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed max-w-xs">
          {para}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </div>
  );
};