import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function PasswordResetSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="Yuinone Logo" className="h-10 mb-16" />

      {/* Checkmark Icon */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#4B856D] mb-8"
        aria-label="Success"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#4B856D]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Main Text */}
      <p className="text-center font-semibold text-black">
        パスワードのリセットが正常に完了しました。
      </p>

      {/* Sub Text */}
      <p className="text-center text-gray-600 my-8 text-sm">
        新しいパスワードでログインしてください。
      </p>

      {/* Button */}
      <Link
        to="/login"
        className="w-full max-w-xs text-center bg-[#BDFAD3] text-[#4B856D] px-6 py-3 rounded-full font-medium hover:bg-[#A5F0C4] transition"
      >
        ログイン画面へ戻る
      </Link>
    </div>
  );
}
