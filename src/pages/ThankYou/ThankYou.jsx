import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function ThankYou() {
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
          
          <div className="flex-1 flex flex-col justify-start w-full text-center mt-4">
            
          </div>

          <div className="flex-1 flex flex-col justify-start p-10 w-full sm:w-[480px] m-auto text-center">
            <div className="flex flex-col items-center mb-12">
                <FaRegCheckCircle size={103} />
              </div>
             <h2 className="text-semimd font-bold mb-6 text-black font-yugothic">
               パスワードのリセットが正常に完了しました
              </h2>
              <h2 className="text-md font-medium text-black">
                新しいパスワードでログインしてください。
              </h2>
              
              {/* Email */}
              

              

              

              

              {/* Login Button */}
               <Link to="/">
              <button className="w-full h-[56px] flex items-center justify-center bg-[#BCF8D0] text-primary-text rounded-3xl font-semibold hover:bg-[#1E5175] hover:text-white ease-linear transform hover:scale-105 transition duration-500 mt-12">
               ログイン画面へ戻る
              </button>
              </Link>
            </div>
         
        </div>
      </div>
    </>
  );
}
