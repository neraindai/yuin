import BookMark from "../../assets/icons/bookmark";
import { useAuth } from "../../context/AuthContext";
import BadgeBtn from "../../components/ExtraComponent/Badge";


const FavoriteVenueCard = ({
  imageUrl,
  title,
  description,
  tag1,
  tag2,
}) => {
  const { isLoggedIn } = useAuth(); // ✅ login status

  return (
    <div className="flex flex-col gap-4 lg:gap-6 bg-white shadow-md p-4 relative">
      {/* Image container */}
      <div className="relative h-60">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* ✅ Badge only when logged in */}
        {isLoggedIn && (
          <span className="absolute top-2 left-2 z-10">
            <BadgeBtn />
          </span>
        )}
      </div>

      {/* Right content */}
      <div className="flex flex-col gap-3 px-4">
        <div>
          <div className="mb-2">
            <h3 className="font-yugothicui font-semibold text-nm md:text-base lg:text-baselg font-semibold text-gray-800 inline-block border-b border-black pb-2 w-[80%]">
              {title}
            </h3>
          </div>

          <p className="font-yugothicui font-light text-sm text-gray-600 line-clamp-3 pt-2">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4">
          <span className="bg-[#D2F4E1] text-gray-700 text-xs px-4 py-1 rounded-full">
            {tag1}
          </span>
          <span className="bg-[#D2F4E1] text-gray-700 text-xs px-4 py-1 rounded-full">
            {tag2}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-2">
          <button className="w-full block font-yugothic font-bold bg-[#D2F4E1] text-[#056644] text-nm lg:text-base px-6 py-2 rounded-full shadow hover:bg-[#bcefd4] transition-all duration-200">
            詳しく見る
          </button>
        </div>
        <div className="absolute top-4 right-4 hidden">
        <BookMark />
      </div>
      </div>
    </div>
  );
};

export default FavoriteVenueCard;
