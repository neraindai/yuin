import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import ContactBanner from "../../assets/images/ContactBanner.jpg";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    furigana: "",
    email: "",
    phone: "",
    inquiryItem: "",
    inquiryContent: "",
    agree: false,
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleConfirm = () => {
    // TODO: You can send formData to API here
    setStep(3);
  };

  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={ContactBanner} />

      <section>
        <div className="min-h-screen bg-white text-black flex flex-col items-center py-10">
          {/* STEP 1: 入力フォーム */}
          {step === 1 && (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg bg-white rounded-lg p-6"
            >
              <SectionHeader
                sectionTitle="お問い合わせフォーム"
                shortDescription="会場見学やフェアに関するお問い合わせには対応しておりません。適切なお問い合わせ方法をご利用ください"
              />

              <h2 className="font-semibold mb-4 border-b pb-1">
                1. お名前と連絡先
              </h2>

              <label className="block mb-3">
                <span className="flex items-center">
                  名前{" "}
                  <span className="ml-1 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  placeholder="名前"
                  required
                />
              </label>

              <label className="block mb-3">
                <span className="flex items-center">
                  名前[フリガナ]{" "}
                  <span className="ml-1 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                </span>
                <input
                  type="text"
                  name="furigana"
                  value={formData.furigana}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  placeholder="名前[フリガナ]"
                  required
                />
              </label>

              <label className="block mb-3">
                <span className="flex items-center">
                  メールアドレス{" "}
                  <span className="ml-1 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  placeholder="メールアドレス"
                  required
                />
              </label>

              <label className="block mb-6">
                <span>電話番号</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  placeholder="電話番号"
                />
              </label>

              <h2 className="font-semibold mb-4 border-b pb-1">
                2. お問い合わせ
              </h2>

              <label className="block mb-3">
                <span className="flex items-center">
                  お問い合わせ項目{" "}
                  <span className="ml-1 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                </span>
                <select
                  name="inquiryItem"
                  value={formData.inquiryItem}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  required
                >
                  <option value="">お問い合わせ項目</option>
                  <option value="このサイトについて">このサイトについて</option>
                  <option value="会場の空き状況">会場の空き状況</option>
                </select>
              </label>

              <label className="block mb-6">
                <span className="flex items-center">
                  お問い合わせ内容{" "}
                  <span className="ml-1 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                </span>
                <textarea
                  name="inquiryContent"
                  value={formData.inquiryContent}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1 text-black"
                  placeholder="お問い合わせ内容"
                  required
                />
              </label>

              <label className="flex items-center mb-6">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                同意します
              </label>

              <button
                type="submit"
                className="w-full bg-green-200 text-primary-text rounded-full py-2 font-semibold hover:bg-green-300"
              >
                次へ
              </button>
            </form>
          )}

          {/* STEP 2: 確認画面 */}
          {step === 2 && (
            <div className="w-full max-w-lg bg-white rounded-lg p-6 text-black">
              <h2 className="text-primary-text font-semibold text-lg mb-6">
                ご登録確認
              </h2>

              {/* Section 1 */}
              <div className="mb-6">
                <h3 className="font-semibold border-b pb-1 mb-3">
                  1. お名前と連絡先
                </h3>
                <p className="flex mb-4">
                  <span className="w-40 text-gray-500">名前</span>
                  <span className="flex-1 font-medium">{formData.name}</span>
                </p>
                <p className="flex mb-4">
                  <span className="w-40 text-gray-500">名前[フリガナ]</span>
                  <span className="flex-1 font-medium">
                    {formData.furigana}
                  </span>
                </p>
                <p className="flex mb-4">
                  <span className="w-40 text-gray-500">メールアドレス</span>
                  <span className="flex-1 font-medium">{formData.email}</span>
                </p>
                <p className="flex mb-4">
                  <span className="w-40 text-gray-500">電話番号</span>
                  <span className="flex-1 font-medium">{formData.phone}</span>
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-6">
                <h3 className="font-semibold border-b pb-1 mb-3">
                  2. お問い合わせ
                </h3>
                <p className="flex mb-4">
                  <span className="w-40 text-gray-500">お問い合わせ項目</span>
                  <span className="flex-1 font-medium">
                    {formData.inquiryItem}
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="w-40 text-gray-500">お問い合わせ内容</span>
                  <span className="flex-1 font-medium whitespace-pre-line">
                    {formData.inquiryContent}
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="w-1/2 bg-gray-200 text-gray-700 rounded-full py-2 font-semibold hover:bg-gray-300"
                >
                  戻る
                </button>
                <button
                  onClick={handleConfirm}
                  className="w-1/2 bg-green-200 text-primary-text rounded-full py-2 font-semibold hover:bg-green-300"
                >
                  送信
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: 完了画面 */}
          {step === 3 && (
            <div className="w-full max-w-lg bg-white rounded-lg p-6 text-center text-black">
              <h2 className="text-primary-text font-semibold text-xl mb-4">
                お問い合わせありがとうございました
              </h2>
              <p className="text-gray-600 mb-6">
                ご入力いただいた内容を送信しました。<br />
                担当者よりご連絡差し上げますので、しばらくお待ちください。
              </p>
              <button
                onClick={() => setStep(1)}
                className="bg-green-200 text-primary-text rounded-full py-2 px-6 font-semibold hover:bg-green-300"
              >
                フォームに戻る
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer part */}
      <Footer />
    </>
  );
}
