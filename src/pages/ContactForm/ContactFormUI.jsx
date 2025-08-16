import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import ContactBanner from "../../assets/images/ContactBanner.jpg";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";

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
          className="max-w-3xl w-[90%] md:w-[80%] my-10 mx-auto text-black"
        >
          <SectionHeader
            sectionTitle="お問い合わせフォーム"
            shortDescription="[会場見学やフェアに関するお問い合わせには対応しておりません。適切なお問い合わせ方法をご利用ください]"
          />

          <h2 className="text-base md:text-lg font-bold border-b border-gray-300 pb-1 mb-6">
            情報を入力してください
          </h2>

          {[
            "名前",
            "名前(フリガナ)",
            "企業名",
            "部署名、式場名、ブランド名",
            "電話番号",
            "メールアドレス",
            "貴社HPのURL",
            "お問い合わせ内容（選択）",
            "お問い合わせ内容",
          ].map((label, idx) => (
            <div key={idx} className="mb-6">
              <label className="block font-medium mb-2 text-sm md:text-base">
                {label}{" "}
                <span className="text-red-600 text-xs bg-red-100 px-1 py-0.5 rounded">
                  必須
                </span>
              </label>
              {label.includes("（選択") ? (
                <select
                  name={label}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm md:text-base"
                >
                  <option value="">{label}</option>
                  <option value="このサイトについて">このサイトについて</option>
                  <option value="その他">その他</option>
                </select>
              ) : label.includes("お問い合わせ内容") ? (
                <textarea
                  name={label}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm md:text-base"
                  rows={4}
                />
              ) : (
                <input
                  type="text"
                  name={label}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm md:text-base"
                />
              )}
            </div>
          ))}

          <h2 className="text-base md:text-lg font-bold border-b border-gray-300 pb-1 mb-6">
            事業所在地
          </h2>

          {/* Postal Code inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="0000"
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="0000"
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="市区町村"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-full"
          />
          <input
            type="text"
            placeholder="町名・番地"
            className="border border-gray-300 rounded-lg p-3 mb-4 w-full"
          />

          <label className="flex items-center gap-2 mb-8 text-sm md:text-base">
            <input type="checkbox" className="h-4 w-4" />
            <span>同意します</span>
          </label>

          <button
            type="submit"
            className="w-full bg-green-100 text-black py-3 rounded-full hover:bg-green-200 transition"
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
