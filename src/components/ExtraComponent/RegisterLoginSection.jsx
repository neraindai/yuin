import DecorativeDivider from "./DecorativeDivider";
import ActionCard from "./ActionCard";

import { useAuth } from "../../context/AuthContext";
import SectionHeader from "./SectionHeader";

const RegisterLoginSection = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <>
          {/* Title */}
            <div className="mt-[64px]">
              <SectionHeader sectionTitle="ふたりの特別な日まで" shortDescription="笑顔と感動に包まれる、その日を想いご準備を重ねる日々"/>
            </div>
        <div className="bg-[#F8F8F8] py-10">
          <div className="container mx-auto flex flex-col items-center">
            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-sm w-full">
            <div className="w-full md:w-[800px] lg:w-[900px] mx-auto flex flex-col md:flex-row py-4 lg:py-6 px-0 md:px-10 lg:px-20 w-full items-center gap-6">
              {/* Left Section */}
              <div className="flex-1 text-center md:text-left justify-center">
                <h2 className="font-yugothic font-bold text-baselg md:text-md lg:xlg text-primary-text mb-3">
                  翔太 & 彩乃様
                </h2>
                <div className="flex flex-col gap-2">
                  {/* First group */}
                  <div>
                    <p className="font-yugothic font-regular text-black text-base leading-snug">
                      ・結婚式まで
                    </p>
                    <p className="font-yugothic font-bold text-black text-basemd ml-4 leading-snug">
                      120日
                    </p>
                  </div>

                  {/* Second group */}
                  <div>
                    <p className="font-yugothic font-regular text-black text-base leading-snug">
                      ・挙式予定日：
                    </p>
                    <p className="font-yugothic font-bold text-black text-basemd ml-4 leading-snug">
                      2025年08月15日
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="font-yugothic font-bold text-baselg my-6 bg-bgBtn hover:bg-green-300 text-primary-text px-10 md:px-12 lg:px-16 py-2 rounded-full transition">
                  会員情報変更・退会
                </button>

                {/* Link */}
                <p className="mt-3">
                  <a href="#" className="font-yugothic font-semibold text-base text-primary-text underline">
                    結婚式場からのメッセージ一覧
                  </a>
                </p>
              </div>

              {/* Right Section */}
              <div className="w-full max-w-[253px] bg-gradient-to-r from-[#4C8B6D] to-[#BCF8D0] rounded-lg flex-1 text-center py-8 relative overflow-hidden">
                {/* Inner border */}
                <div className="m-2 absolute inset-0 rounded-lg border-2 border-white z-10 pointer-events-none"></div>

                <div className="relative z-20">
                  <p className="font-yumincho font-semibold text-base text-white text-sm">結婚式まであと</p>
                  <p className="font-yugothic font-bold text-[30px] md:text-[40px] lg:text-[54px] text-white mt-2">120日</p>

                  {/* Timer */}
                  <div className="flex justify-center gap-10 mt-3 text-white">
                    <div>
                      <p className="font-yugothic text-basemd text-white font-semibold">14</p>
                      <p className="font-yugothic text-xm font-bold text-white">時</p>
                    </div>
                    <div>
                      <p className="font-yugothic text-basemd text-white font-semibold">57</p>
                      <p className="font-yugothic text-xm font-bold text-white">分</p>
                    </div>
                    <div>
                      <p className="ont-yugothic text-basemd text-white font-semibold">45</p>
                      <p className="font-yugothic text-xm font-bold text-white">秒</p>
                    </div>
                  </div>

                  <p className="font-yumincho font-semibold text-white text-smd text-base mt-4">2025年08月15日</p>
                  <p className="font-yumincho font-semibold text-base lg:text-md text-white mt-1">翔太 & 彩乃</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
          <div className="container mt-[26px] px-4 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
              <ActionCard
                label="会員登録すれば、よりお得な情報が見れます！"
                buttonText="今すぐ登録"
              />
              <ActionCard label="会員の方はこちら" buttonText="ログイン" />
            </div>
          </div>
        </>
      )}
      <DecorativeDivider />
    </>

  );
};

export default RegisterLoginSection;
