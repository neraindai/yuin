import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    furigana: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo Section */}
      <div className="my-6 flex flex-col items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Title */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg">
        <h2 className="text-lg font-bold mb-2 text-black">新規会員登録</h2>
        <p className="mb-4 font-semibold">情報入力</p>
        <hr className="mb-6 border-gray-300" />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg p-6"
        >

          {[
            {
              label: "名前",
              name: "name",
              type: "text",
              placeholder: "名前を入力してください",
            },
            {
              label: "名前(フリガナ)",
              name: "furigana",
              type: "text",
              placeholder: "名前(フリガナ)を入力してください",
            },
            {
              label: "メールアドレス",
              name: "email",
              type: "email",
              placeholder: "メールアドレスを入力してください",
            },
            {
              label: "電話番号",
              name: "phone",
              type: "tel",
              placeholder: "電話番号を入力してください",
            //   required: false,
            },
            {
              label: "性別",
              name: "gender",
              type: "text",
              placeholder: "性別を入力してください",
            },
            {
              label: "パスワード",
              name: "password",
              type: "password",
              placeholder: "パスワードを入力してください",
            },
            {
              label: "パスワード確認",
              name: "passwordConfirm",
              type: "password",
              placeholder: "パスワード確認を入力してください",
            },
          ].map(({ label, name, type, placeholder, required = true }) => (
            <label key={name} className="block mb-4">
              <span className="flex items-center text-black font-semibold mb-1">
                {label}{" "}
                {required && (
                  <span className="ml-2 text-xs text-white bg-red-500 px-1 rounded">
                    必須
                  </span>
                )}
              </span>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder={placeholder}
                required={required}
              />
            </label>
          ))}

          <button
            type="submit"
            className="w-full bg-green-200 text-green-900 font-medium py-2 rounded-3xl hover:bg-green-300 transition"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
