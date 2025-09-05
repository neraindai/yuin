import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import ContactBanner from "../../assets/images/ContactBanner.jpg";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";
import CustomSelect from "../../components/ExtraComponent/CustomSelect";
import { iconhome } from "../../assets";
import { FaSearch } from "react-icons/fa";

export default function ContactFormUI() {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={ContactBanner} />

      {step === 2 ? (
        <div className="max-w-3xl w-[90%] md:w-[80%] my-10 mx-auto bg-white p-6 md:p-10 rounded-xl shadow border border-gray-300 text-black">
          <h2 className="text-primary-text text-lg md:text-xl font-bold mb-6 md:mb-8">
            ご登録確認
          </h2>
          <dl className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex flex-col md:flex-row md:gap-x-8">
                <dt className="w-full md:w-40 text-gray-700 font-medium mb-1 md:mb-0">
                  {key}
                </dt>
                <dd className="flex-1 whitespace-pre-wrap">{value}</dd>
              </div>
            ))}
          </dl>
          <button
            onClick={() => alert("Form confirmed")}
            className="mt-8 w-full bg-green-100 text-black py-3 rounded-full hover:bg-green-200 transition"
          >
            確定
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-[457px] my-10 mx-auto text-black"
        >
          <SectionHeader
            sectionTitle="お問い合わせフォーム"
            shortDescription="[会場見学やフェアに関するお問い合わせには対応しておりません。適切なお問い合わせ方法をご利用ください]"
            smallHeading
            colorBlack
          />
          <h2 className="mb-[20px] md:mb-[50px] block text-left heading text-md md:text-xmd lg:text-lg text-black mt-0 font-yugothic font-bold tracking-tightest border-b border-black">
            1 情報を入力してください
          </h2>

          <div className="mb-6">
            {/* label wrapper */}
            <div className="mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                名前
                <span className="inline-block font-yugothicui font-semibold  text-sm text-white bg-[#f00] py-2 px-4 rounded-[15px] ml-2">
                  必須
                </span>
              </label>
              <div className="relative flex items-center border rounded-md overflow-hidden h-[50px]">
                <input
                  type="text"
                  name="名前"
                  placeholder="名前"
                  className="flex-1 h-full outline-none rounded-none text-[10px] block"
                />
              </div>
            </div>
            {/* label wrapper */}
            <div className="mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                名前[フリガナ]
                <span className="inline-block font-yugothicui font-semibold  text-sm text-white bg-[#f00] py-2 px-4 rounded-[15px] ml-2">
                  必須
                </span>
              </label>
              <div className="relative flex items-center border rounded-md overflow-hidden h-[50px]">
                <input
                  type="text"
                  name="名前[フリガナ]"
                  placeholder="名前[フリガナ]"
                  className="flex-1 h-full outline-none rounded-none text-[10px] block"
                />
              </div>
            </div>
            {/* label wrapper */}
            <div className="mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                メールアドレス
                <span className="inline-block font-yugothicui font-semibold  text-sm text-white bg-[#f00] py-2 px-4 rounded-[15px] ml-2">
                  必須
                </span>
              </label>
              <div className="relative flex items-center border rounded-md overflow-hidden h-[50px]">
                <input
                  type="text"
                  name="メールアドレス"
                  placeholder="メールアドレス"
                  className="flex-1 h-full outline-none rounded-none text-[10px] block"
                />
              </div>
            </div>
            {/* label wrapper */}
            <div className="mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                電話番号
              </label>
              <div className="relative flex items-center border rounded-md overflow-hidden h-[50px]">
                <input
                  type="text"
                  name="ven電話番号ue"
                  placeholder="電話番号"
                  className="flex-1 h-full outline-none rounded-none text-[10px] block"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="mb-[20px] md:mb-[50px] block text-left heading text-md md:text-xmd lg:text-lg text-black mt-0 font-yugothic font-bold tracking-tightest border-b border-black">
              2 事業所在地
            </h2>
            {/* Select field */}
            <div className="relative mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                お問い合わせ項目
                <span className="inline-block font-yugothicui font-semibold  text-sm text-white bg-[#f00] py-2 px-4 rounded-[15px] ml-2">
                  必須
                </span>
              </label>
              <CustomSelect
                name="お問い合わせ項目"
                placeholder="お問い合わせ項目"
                options={["お問い合わせ項目1", "お問い合わせ項目2", "お問い合わせ項目3"]}
                customModify="h-[50px]"
                withouSearchIcon
              />
            </div>

            <div className="relative mb-3">
              <label className="font-yugothicui font-regular  text-black text-base block mb-3">
                お問い合わせ内容
                <span className="inline-block font-yugothicui font-semibold  text-sm text-white bg-[#f00] py-2 px-4 rounded-[15px] ml-2">
                  必須
                </span>
              </label>
              <textarea name="お問い合わせ内容" placeholder="お問い合わせ内容" className="p-4 h-[200px] w-full resize-none border rounded-md overflow-hidden focus:outline-none"></textarea>
            </div>
          </div>

          {/* Postal Code inputs */}
          <div className="flex flex-row justify-center items-center mt-4">
            <label className="flex items-center gap-2 mb-8 text-sm md:text-base">
              <input type="checkbox" className="h-4 w-4" />
              <span>同意します</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-bgBtn text-primary-text py-3 font-yugothic font-semibold text-base rounded-full hover:bg-green-200 transition"
          >
            次へ
          </button>
        </form>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}
