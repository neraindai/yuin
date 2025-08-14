import DecorativeDivider from "./DecorativeDivider";
import ActionCard from "./ActionCard";

import { useAuth } from "../../context/AuthContext";

const RegisterLoginSection = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <div>
          {/* Title */}
          <div className="text-center my-6">
            <h1 className="text-green-600 text-xl font-semibold">
              ふたりの特別な日まで
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              笑顔と感動に包まれる、その日を想いご準備を重ねる日々
            </p>
          </div>
          <div className="bg-gray-50 flex flex-col items-center py-10">
            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-sm flex flex-col md:flex-row p-6 px-20 w-full max-w-4xl items-center gap-6">
              {/* Left Section */}
              <div className="flex-1 text-center md:text-left justify-center">
                <h2 className="text-lg font-medium text-green-800 mb-3">
                  翔太 & 彩乃様
                </h2>
                <div className="flex flex-col gap-2">
                  {/* First group */}
                  <div>
                    <p className="text-gray-700 text-sm leading-snug">
                      ・結婚式まで
                    </p>
                    <p className="ml-4 font-semibold text-gray-800 text-sm leading-snug">
                      120日
                    </p>
                  </div>

                  {/* Second group */}
                  <div>
                    <p className="text-gray-700 text-sm leading-snug">
                      ・挙式予定日：
                    </p>
                    <p className="ml-4 font-semibold text-gray-800 text-sm leading-snug">
                      2025年08月15日
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-4 bg-green-200 hover:bg-green-300 text-green-800 font-medium px-6 py-2 rounded-full transition">
                  会員情報変更・退会
                </button>

                {/* Link */}
                <p className="mt-3">
                  <a href="#" className="text-green-600 text-sm underline">
                    結婚式場からのメッセージ一覧
                  </a>
                </p>
              </div>

              {/* Right Section */}
              <div className="bg-green-100 rounded-lg flex-1 text-center py-8 relative overflow-hidden">
                {/* Inner border */}
                <div className="m-2 absolute inset-0 rounded-lg border-2 border-white z-10 pointer-events-none"></div>

                <div className="relative z-20">
                  <p className="text-white text-sm">結婚式まであと</p>
                  <p className="text-white text-4xl font-bold mt-2">120日</p>

                  {/* Timer */}
                  <div className="flex justify-center gap-10 mt-3 text-white">
                    <div>
                      <p className="text-white text-2xl font-semibold">14</p>
                      <p className="text-white text-xs">時</p>
                    </div>
                    <div>
                      <p className="text-white text-2xl font-semibold">57</p>
                      <p className="text-white text-xs">分</p>
                    </div>
                    <div>
                      <p className="text-white text-2xl font-semibold">45</p>
                      <p className="text-white text-xs">秒</p>
                    </div>
                  </div>

                  <p className="text-white text-sm mt-4">2025年08月15日</p>
                  <p className="text-white font-medium mt-1">翔太 & 彩乃</p>
                </div>
              </div>
            </div>
          </div>

          <DecorativeDivider />
        </div>
      ) : (
        <section className="px-4 py-12 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <ActionCard
              label="会員登録すれば、よりお得な情報が見れます！"
              buttonText="今すぐ登録"
            />
            <ActionCard label="会員の方はこちら" buttonText="ログイン" />
          </div>
          <DecorativeDivider />
        </section>
      )}
    </>
  );
};

export default RegisterLoginSection;
