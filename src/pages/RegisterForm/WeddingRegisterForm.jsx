import React, { useState } from "react";
import logo from "../../assets/logo.png";

export default function WeddingRegisterForm() {
  const [formData, setFormData] = useState({
    weddingDate: "",
    postalCode: "",
    city: "",
    address: "",
    weddingBudget: "",
    weddingStyle: "",
    infoSources: [],
    ceremonyLocations: ["", "", ""],
    guestCount: "",
    guestBudget: "",
  });

  const infoOptions = [
    "Instagram（インスタグラム）",
    "Web検索（GoogleやYahooなど）",
    "結婚情報サイト（ゼクシィ、ハナユメ など）",
    "友人・知人からの紹介",
    "店舗のチラシ・パンフレット",
    "ブライダルフェアやイベントで知った",
    "雑誌やメディア情報を見て",
    "その他（自由記入）",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(option) {
    setFormData((prev) => {
      const newSources = prev.infoSources.includes(option)
        ? prev.infoSources.filter((src) => src !== option)
        : [...prev.infoSources, option];
      return { ...prev, infoSources: newSources };
    });
  }

  function handleCeremonyChange(index, value) {
    const updated = [...formData.ceremonyLocations];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, ceremonyLocations: updated }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // Navigate to success page here
  }

  const RequiredTag = () => (
    <span className="ml-2 text-xs text-white bg-red-500 px-1 rounded">
      必須
    </span>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-12 mb-6" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white px-4 md:px-0"
      >
        <h2 className="text-lg font-bold mb-2 text-black">新規会員登録</h2>
        <p className="mb-4 font-semibold">プロフィール詳細入力</p>
        <hr className="mb-6 border-gray-300" />

        {/* Wedding Date */}
        <label className="block mb-4">
          <span className="font-semibold text-black">
            挙式予定日 <RequiredTag />
          </span>
          <input
            type="text"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            placeholder="メールアドレスを入力してください"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-200 focus:outline-none"
          />
        </label>

        {/* Business Location */}
        <p className="mt-6 font-semibold">事業所在地</p>

        {[
          { label: "郵便番号", name: "postalCode" },
          { label: "市区町村", name: "city" },
          { label: "町名・番地", name: "address" },
        ].map((field) => (
          <label key={field.name} className="block mb-4">
            <span className="font-semibold text-black">
              {field.label} <RequiredTag />
            </span>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder="メールアドレスを入力してください"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-200 focus:outline-none"
            />
          </label>
        ))}

        {/* Wedding Budget */}
        <label className="block mb-4">
          <span className="font-semibold text-black">
            結婚式の予算 <RequiredTag />
          </span>
          <input
            type="text"
            name="weddingBudget"
            value={formData.weddingBudget}
            onChange={handleChange}
            placeholder="メールアドレスを入力してください"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </label>

        {/* Wedding Style */}
        <label className="block mb-4">
          <span className="font-semibold text-black">
            ウェディングのスタイル <RequiredTag />
          </span>
          <select
            name="weddingStyle"
            value={formData.weddingStyle}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">選択してください</option>
            <option value="style1">スタイル1</option>
            <option value="style2">スタイル2</option>
          </select>
        </label>

        {/* Info Source */}
        <p className="font-semibold text-black mb-2">
          情報の入手経路 <RequiredTag />
        </p>
        <div className="mb-6 space-y-2">
          {infoOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.infoSources.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="w-4 h-4 border-gray-300"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Ceremony Locations */}
        <p className="font-semibold text-black mb-2">
          式場開催予定 都道府県 <RequiredTag />
        </p>
        {formData.ceremonyLocations.map((val, i) => (
          <input
            key={i}
            type="text"
            value={val}
            onChange={(e) => handleCeremonyChange(i, e.target.value)}
            placeholder={`第${i + 1}希望`}
            className="mb-4 w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        ))}

        {/* Guest Count */}
        <label className="block mb-4">
          <span className="font-semibold text-black">
            披露宴予定人数（予定） <RequiredTag />
          </span>
          <input
            type="text"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            placeholder="メールアドレスを入力してください"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </label>

        {/* Guest Budget */}
        <label className="block mb-8">
          <span className="font-semibold text-black">
            披露宴予算（予定） <RequiredTag />
          </span>
          <input
            type="text"
            name="guestBudget"
            value={formData.guestBudget}
            onChange={handleChange}
            placeholder="メールアドレスを入力してください"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-200 text-green-900 font-medium py-3 rounded-full hover:bg-green-300"
        >
          確認する
        </button>
      </form>
    </div>
  );
}
