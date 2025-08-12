import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiLine } from "react-icons/si";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white">
        <div className="flex flex-col shadow-lg pl-8 pr-4 py-6 mb-8 w-full items-start">
          <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
        </div>
        <div className="container mx-auto flex-col">
          {/* Logo Section */}
            <div className="my-6 flex flex-col items-center mb-12">
                <Link to="/">
                <img src={logo} alt="Logo" className="h-16" />
                </Link>
            </div>

          {/* Main Card */}
            <div className="flex-1 flex flex-col justify-start p-10 w-full sm:w-[480px] m-auto">
              <h2 className="text-semimd font-bold mb-6 text-black font-yugothic">
                新規会員登録
              </h2>
              <h2 className="text-md font-medium mb-6 text-black border-b border-[#ccc] pb-2">
                情報入力
              </h2>

              {/* Email */}
              <div className="mb-8">
                <label className="block mb-3 font-montserrat font-medium text-[#141416]">名前 <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-[#141416] font-montserrat font-medium">名前[フリガナ] <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-[#141416] font-montserrat font-medium">メールアドレス <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-[#141416] font-montserrat font-medium">電話番号 <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-[#141416] font-montserrat font-medium">性別 <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-[#141416] font-montserrat font-medium">パスワード <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>


              <div className="mb-4">
                <label className="block mb-3 text-black font-montserrat font-medium">パスワード確認 <span className="badges bg-red-600 text-white">必要</span></label>
                <div className="flex flex-col">
                  <input type="email" placeholder="メールアドレスを入力してください" />
                </div>
              </div>

              

              {/* Login Button */}
               <Link to="/email-verification">
              <button className="w-full h-[56px] flex items-center justify-center bg-[#BCF8D0] text-primary-text rounded-3xl font-semibold hover:bg-[#1E5175] hover:text-white ease-linear transform hover:scale-105 transition duration-500">
               ログイン
              </button>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}
