import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { logo } from "../../assets";
export default function Footer() {
  return (
    <footer className="bg-[#E2F1E4] border-t border-gray-300 mt-[45px]">
      <div className="container mx-auto flex flex-wrap justify-between py-8 md:py-10 lg:py-16">

        {/* Left Columns */}
        <div className="grid grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] gap-4 w-full lg:w-[70%]">
          <div className="mr-[20px]">
            <h3 className="font-yugothic text-black font-bold mb-2 text-basemd md:text-basemd lg:text-baselg">メインページ</h3>
            <ul className="space-y-2 text-black font-yugothic font-regular text-base">
              <li>トップページ</li>
              <li>よくある質問</li>
              <li>お問い合わせ</li>
              <li>利用規約</li>
              <li>プライバシーポリシー</li>
            </ul>
          </div>

          <div className="mr-[20px]">
            <h3 className="font-yugothic text-black font-bold mb-2 text-basemd md:text-basemd lg:text-baselg">式場を探す</h3>
            <ul className="space-y-2 text-black font-yugothic font-regular text-smd md:text-nm lg:text-base">
              <li>エリアから探す</li>
              <li>式場タイプから探す</li>
              <li>予算で探す</li>
            </ul>
          </div>

          <div className="mr-[20px]">
            <h3 className="font-yugothic text-black font-bold mb-2 text-basemd md:text-basemd lg:text-baselg">サービス</h3>
            <ul className="space-y-2 text-black font-yugothic font-regular text-smd md:text-nm lg:text-base">
              <li>プラン比較</li>
              <li>会場見学予約</li>
              <li>結婚準備ガイド</li>
            </ul>
          </div>

          <div className="mr-[20px]">
            <h3 className="font-yugothic text-black font-bold mb-2">SNS</h3>
            <div className="flex gap-3 text-black mb-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[338px] mx-[auto] py-10 xl:py-0">

          {/* Contact Card */}
          <div className="bg-white rounded-[25px] p-7 shadow-sm border border-gray-200">
            <p className="text-center paragraph mb-4 mt-2 text-[#1E5175] underline font-semibold ">
              お問い合わせについて
            </p>
            <button className="w-full bg-bgBtn text-primary-text py-3 rounded-[25px] text-sm font-yugothic font-semibold mb-2">
              お客様向けはこちら
            </button>
            <button className="w-full bg-bgBtn text-primary-text py-3 rounded-[25px] text-sm font-yugothic font-semibold mb-3">
              法人様、広告企業向けはこちら
            </button>
            <div className="border-t border-gray-300 pt-2 text-center text-sm font-zen font-semibold text-gray-700">
              お問い合わせ電話番号（お客様専用）
              <div className="font-bold font-zen text-base md:text-basemd lg:text-baselg">0000-0000-0000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto py-5 border-t border-gray-300 pt-3 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
         <img src={logo} alt="Logo" className="mb-5 mt-3 lg:mt-0 lg:mb-0 h-8" />
        </div>
        <p className="font-yugothic font-light text-base">© 202X ゆいのね / ○○会社. All rights reserved.</p>
      </div>
    </footer>
  );
}
