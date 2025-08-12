import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function EmailVerification() {
  const [formData, setFormData] = useState({
    email: "abc@gmail.com",
    verificationCode: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add verification logic here
    console.log("Submitted verification:", formData);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo Section */}
      <div className="my-10 flex flex-col items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      <div className="form-wrap w-full mx-auto">
        <p className="block w-full text-center font-semibold mb-4">
          以下のメールアドレス宛に認証コードを記載したメールを送信しました。
        </p>
        <p className="block w-full text-center text-sm mb-6 text-gray-600">
          メール本文内の認証コードを入力し、「次へ」でお進みください。
        </p>
      </div>
      <div className="form-wrap w-full max-w-md bg-white p-8 rounded-lg">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">認証コード</label>
            <input
              type="text"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              placeholder="認証コードを入力してください"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-200 text-green-900 font-medium py-2 rounded-3xl hover:bg-green-300 transition"
          >
            次へ
          </button>
        </form>
      </div>
    </div>
  );
}
