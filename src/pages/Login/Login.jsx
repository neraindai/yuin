import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiLine } from "react-icons/si";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white py-10">
        <div className="container mx-auto flex-col">
          {/* Logo Section */}
          <div className="my-6 flex flex-col items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Main Card */}
          <div className="mt-10 flex flex-col md:flex-row w-full rounded-lg overflow-hidden">
            {/* Login Section */}
            <div className="flex-1 flex flex-col justify-start p-10">
              <h2 className="text-lg font-bold mb-6 text-gray-800">
                アカウントにログイン
              </h2>

              {/* Email */}
              <div className="mb-4">
                <label className="block mb-3 text-black font-montserrat font-semibold">メールアドレス</label>
                <div className="flex items-center rounded-[8px] px-3 h-[56px] border-[1px] border-[solid] border-[#ccc]">
                  <FaEnvelope size={21} className="text-primary-text mr-3" />
                  <input
                    type="email"
                    placeholder="メールアドレスを入力してください"
                    className="!outline-none !border-0 !pl-0"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block mb-3 text-black font-montserrat font-semibold">パスワード</label>
                <div className="flex items-center rounded-[8px] px-3 h-[56px] border-[1px] border-[solid] border-[#ccc]">
                  <FaLock size={21} className="text-primary-text mr-3" />
                  <input
                    type="password"
                    placeholder="パスワードを入力してください"
                    className="!outline-none !border-0 !pl-0"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button className="w-full h-[56px] flex items-center justify-center bg-[#BCF8D0] text-green-900 rounded-3xl font-semibold hover:bg-[#AEE4B0]">
                ログイン
              </button>

              {/* Terms */}
              <p className="text-nm text-black mt-4 paragraph leading-[22px]">
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
            <div className="hidden md:flex flex-col justify-center items-center w-px bg-[#BBD3C7] relative ml-20 mr-20 pl-1">
              <span className="absolute bg-white pt-8 pb-8 text-gray-500 font-zen">OR</span>
            </div>

            {/* Sign-up Section */}
            <div className="flex-1 flex flex-col justify-start p-10">
              <h3 className="text-lg font-bold mb-2 text-gray-800 text-center">
                初めてですか？
              </h3>
              <p className="paragraph font-montserrat font-md mb-5 mt-4 text-center">
                登録して、たくさんの新しいチャンスを見つけましょう！
              </p>

              <div className="space-y-4">
                <button className="w-full h-[56px] flex items-center justify-center gap-2 bg-[#BCF8D0] rounded-3xl hover:bg-[#AEE4B0] text-primary-text">
                  <FcGoogle size={23} />
                  <span className="text-primary-text font-montserrat font-semibold">Googleでログイン</span>
                </button>
                <button className="w-full h-[56px] flex items-center justify-center gap-2 bg-[#BCF8D0] rounded-3xl hover:bg-[#AEE4B0] text-primary-text">
                  <SiLine size={23} className="text-green-500" />
                  <span className="text-primary-text font-montserrat font-semibold">LINEでログイン</span>
                </button>
                <button className="w-full h-[56px] flex items-center justify-center gap-2 bg-[#BCF8D0] rounded-3xl hover:bg-[#AEE4B0] text-primary-text">
                  <FaEnvelope size={23} className="text-primary-text" />
                  <span className="text-primary-text font-montserrat font-semibold">メールでサインアップ</span>
                </button>
              </div>
            </div>
          </div>

          <div className="footerNote text-center mt-20">
            {/* Forgot Password */}
            <div className="mt-4">
              <a
                href="#"
                className="text-base font-semibold text-black mt-4 paragraph text-blue-500 underline hover:text-blue-600"
              >
                パスワードをお忘れの方
              </a>
            </div>
            {/* Footer Note */}

            <p className="mt-6 text-sm text-black text-center text-nm text-black mt-4 paragraph leading-[22px]">
              パスワードの再設定をご希望の場合は、以下の手順に従ってください。ご不明な点がございました <br/>ら、サポートまでお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
