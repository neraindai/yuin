import { useState } from "react";
import HeroMiniImage from "../../components/HeroMiniImage";
import ContactBanner from "../../assets/images/ContactBanner.jpg";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";

export default function InquiryFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    nameKana: "",
    department: "",
    position: "",
    phone: "",
    email: "",
    website: "",
    inquiry: "",
    contactMethod: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirm = () => {
    // replace with API logic
    alert("送信しました！");
    setStep(1);
    setFormData({
      company: "",
      name: "",
      nameKana: "",
      department: "",
      position: "",
      phone: "",
      email: "",
      website: "",
      inquiry: "",
      contactMethod: "",
      agree: false,
    });
  };

  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={ContactBanner} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {step === 1 && (
          <>
            {/* <h1 className="text-2xl font-bold text-center mb-2">
              お問い合わせフォーム
            </h1>
            <p className="text-center text-sm text-gray-500 mb-8">
              ※会場探しやフェアに関するお問い合わせには対応しておりません。適切なお問い合わせ方法をご利用ください
            </p> */}

            <SectionHeader
              sectionTitle="お問い合わせフォーム"
              shortDescription="※会場探しやフェアに関するお問い合わせには対応しておりません。適切なお問い合わせ方法をご利用ください"
            />

            <h2 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-6">
              情報を入力してください
            </h2>

            <form className="space-y-4" onSubmit={handleNext}>
              <FormInput
                label="会社名"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
              />
              <FormInput
                label="ご担当者様のお名前"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <FormInput
                label="ご担当者様のお名前（カナ）"
                name="nameKana"
                required
                value={formData.nameKana}
                onChange={handleChange}
              />
              <FormInput
                label="部署名"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
              <FormInput
                label="役職"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
              <FormInput
                label="電話番号"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <FormInput
                label="メールアドレス"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                label="貴社のウェブサイトURL"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
              />
              <FormTextarea
                label="広告・提携に関するお問合せ内容"
                name="inquiry"
                required
                value={formData.inquiry}
                onChange={handleChange}
              />
              <FormInput
                label="ご希望の連絡方法"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
              />

              <label className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>同意します</span>
              </label>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-green-200 hover:bg-green-300 text-primary-text font-medium"
              >
                次へ
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-primary-text font-semibold text-lg mb-8">
              ご登録確認
            </h2>
            <dl className="grid grid-cols-3 gap-y-6 text-sm">
              <InfoRow label="会社名" value={formData.company} />
              <InfoRow label="ご担当者様のお名前" value={formData.name} />
              <InfoRow
                label="ご担当者様のお名前（カナ）"
                value={formData.nameKana}
              />
              <InfoRow label="部署名" value={formData.department} />
              <InfoRow label="役職" value={formData.position} />
              <InfoRow label="電話番号" value={formData.phone} />
              <InfoRow label="メールアドレス" value={formData.email} />
              <InfoRow label="貴社のウェブサイトURL" value={formData.website} />
              <InfoRow
                label="広告・提携に関するお問合せ内容"
                value={formData.inquiry}
              />
              <InfoRow
                label="ご希望の連絡方法"
                value={formData.contactMethod}
              />
            </dl>

            <div className="mt-8 text-center flex gap-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
              >
                戻る
              </button>
              <button
                onClick={handleConfirm}
                className="px-8 py-3 rounded-full bg-green-200 hover:bg-green-300 text-primary-text font-medium"
              >
                確定
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Reusable components
function FormInput({ label, required, type = "text", value, onChange, name }) {
  return (
    <div>
      <label className="block font-medium mb-1">
        {label} {required && <span className="text-red-500 text-sm">必須</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-3"
      />
    </div>
  );
}

function FormTextarea({ label, required, value, onChange, name }) {
  return (
    <div>
      <label className="block font-medium mb-1">
        {label} {required && <span className="text-red-500 text-sm">必須</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-3 h-24"
      />
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <>
      <dt className="font-medium text-gray-700">{label}</dt>
      <dd className="col-span-2 text-gray-900 whitespace-pre-line">{value}</dd>
    </>
  );
}
