import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function WeddingRegisterSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="Company Logo" className="h-12 mb-10" />

      {/* Success Icon */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-green-500 mb-6"
        aria-label="Registration successful"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Messages */}
      <p className="text-center font-semibold text-black">
        ご登録とミーティングのご予約ありがとうございます。
      </p>
      <p className="text-center text-gray-600 my-6">
        確認メールを送信しましたのでご確認ください。
      </p>

      {/* Button */}
      <Link
        to="/"
        className="w-full max-w-md text-center bg-green-200 text-primary-text px-6 py-3 rounded-full font-medium hover:bg-green-300 transition"
      >
        ホームページへ戻る
      </Link>
    </div>
  );
}
