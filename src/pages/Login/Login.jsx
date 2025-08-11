import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiLine } from "react-icons/si";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white py-10">
        {/* Logo Section */}
        <div className="my-6 flex flex-col items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Main Card */}
        <div className="mt-10 flex flex-col md:flex-row w-full max-w-4xl rounded-lg overflow-hidden">
          {/* Login Section */}
          <div className="flex-1 flex flex-col justify-start p-10">
            <h2 className="text-lg font-bold mb-6 text-gray-800">
              アカウントにログイン
            </h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">メールアドレス</label>
              <div className="flex items-center border border-gray-300 rounded px-3 h-[48px]">
                <FaEnvelope className="text-green-900 mr-2" />
                <input
                  type="email"
                  placeholder="メールアドレスを入力してください"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700">パスワード</label>
              <div className="flex items-center border border-gray-300 rounded px-3 h-[48px]">
                <FaLock className="text-green-900 mr-2" />
                <input
                  type="password"
                  placeholder="パスワードを入力してください"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full h-[48px] flex items-center justify-center bg-[#C1EBC3] text-green-900 rounded-3xl font-semibold hover:bg-[#AEE4B0]">
              ログイン
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-500 mt-4 leading-5">
              サインアップすることで、
              <a href="#" className="text-blue-500 underline">
                利用規約
              </a>
              および
              <a href="#" className="text-blue-500 underline">
                プライバシーポリシー
              </a>
              （クッキーの使用を含む）に同意したものとなります。
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col justify-center items-center w-px bg-gray-200 relative">
            <span className="absolute bg-white px-2 text-gray-500">OR</span>
          </div>

          {/* Sign-up Section */}
          <div className="flex-1 flex flex-col justify-start p-10">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              初めてですか？
            </h3>
            <p className="block mb-1 text-gray-700">
              登録して、たくさんの新しいチャンスを見つけましょう！
            </p>

            <div className="space-y-4">
              <button className="w-full h-[48px] flex items-center justify-center gap-2 bg-[#C1EBC3] rounded-3xl hover:bg-[#AEE4B0]">
                <FcGoogle size={20} />
                <span>Googleでログイン</span>
              </button>
              <button className="w-full h-[48px] flex items-center justify-center gap-2 bg-[#C1EBC3] rounded-3xl hover:bg-[#AEE4B0]">
                <SiLine size={20} className="text-green-500" />
                <span>LINEでログイン</span>
              </button>
              <button className="w-full h-[48px] flex items-center justify-center gap-2 bg-[#C1EBC3] rounded-3xl hover:bg-[#AEE4B0]">
                <FaEnvelope size={20} className="text-green-500" />
                <span>メールでサインアップ</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footerNote text-center mt-4">
          {/* Forgot Password */}
          <div className="mt-4">
            <a
              href="#"
              className="text-sm text-blue-500 underline hover:text-blue-600"
            >
              パスワードをお忘れの方
            </a>
          </div>
          {/* Footer Note */}

          <p className="mt-6 text-xs text-gray-500 text-center max-w-xl">
            パスワードの再設定をご希望の場合は、以下の手順に従ってください。ご不明な点がございましたら、サポートまでお問い合わせください。
          </p>
        </div>
      </div>
    </>
  );
}
