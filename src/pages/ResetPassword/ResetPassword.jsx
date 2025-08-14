import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function ResetPassword() {
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
                  <h2 className="text-semimd font-bold mb-6 text-black font-yugothic">
                     新しいパスワードを入力してください
                    </h2>
                    
                </div>
      
                <div className="flex-1 flex flex-col justify-start p-10 w-full sm:w-[480px] m-auto">
                   
      
                    {/* Email */}
                    <div className="mb-8">
                      <label className="block mb-3 text-black font-montserrat font-medium">新しいパスワード</label>
                      <div className="flex flex-col">
                        <input type="email" placeholder="メールアドレスを入力してください" value="test@gmail.com"   />
                      </div>
                    </div>
      
                    <div className="mb-8">
                      <label className="block mb-3 text-black font-montserrat font-medium">新しいパスワードを再入力してください</label>
                      <div className="flex flex-col">
                        <input type="email"                   
                                         
                        placeholder="メールアドレスを入力してください" 
                        />
                      </div>
                    </div>
      
                    
      
                    
      
                    {/* Login Button */}
                     <Link to="/thank-you">
                    <button className="w-full h-[56px] flex items-center justify-center bg-[#BCF8D0] text-primary-text rounded-3xl font-semibold hover:bg-[#1E5175] hover:text-white ease-linear transform hover:scale-105 transition duration-500 mt-12">
                     確認する
                    </button>
                    </Link>
                  </div>
                  
               
              </div>
            </div>
    </>
  );
}
