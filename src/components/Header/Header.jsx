import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import mailIcon from "../../assets/icons/mail.png";
import bellIcon from "../../assets/icons/bell.png";
import bookmarkIcon from "../../assets/icons/bookmark.png";
import { motion, AnimatePresence } from "framer-motion";

// mobile menu
const navLinks = [
  { to: "/", label: "ホーム", className: "text-green-600" },
  { to: "/celestial-garden-hall", label: "会場を探す" },
  { to: "/budget-wedding", label: "広告協賛で費用を抑える" },
  { to: "/faq-accordion", label: "FAQ" },
  { to: "/contact-form-ui", label: "お問い合わせ" },
  { to: "/terms-of-use", label: "利用規約" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <header
      className={`relative border-b shadow-sm transition-colors duration-300 ${
        isLoggedIn ? "bg-green-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-[120px] xl:w-[150px] block object-contain" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-4 xl:space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="text-primary-text font-yugothic font-bold text-sm xl:text-base">
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/celestial-garden-hall" className="font-yugothic font-bold text-sm xl:text-base">会場を探す</Link>
            </li>
            <li>
              <Link to="/budget-wedding" className="font-yugothic font-bold text-sm xl:text-base">広告協賛で費用を抑える</Link>
            </li>
            <li>
              <Link to="/faq-accordion" className="font-yugothic font-bold text-sm xl:text-base">FAQ</Link>
            </li>
            <li>
              <Link to="/contact-form-ui" className="font-yugothic font-bold text-sm xl:text-base">お問い合わせ</Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="font-yugothic font-bold text-sm xl:text-base">利用規約</Link>
            </li>
          </ul>
        </nav>

        {/* Login / Logout */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            // Show icons and logout when logged in
            <div className="flex items-center space-x-4 text-black">
              <img
                src={mailIcon}
                alt="Mail"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={bellIcon}
                alt="Notifications"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={bookmarkIcon}
                alt="Bookmarks"
                className="w-5 h-5 cursor-pointer"
              />

              {/* Profile Circle */}
              <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full cursor-pointer">
                あ
              </div>

              {/* Logout */}
              <button className="py-2 text-sm font-medium">
                ログアウト
              </button>
            </div>
          ) : (
            // Show login/register when logged out
            <Link
              to="/login"
              className="font-yugothic font-bold text-sm xl:base bg-bgBtn text-primary-text px-[15px] xl:px-[20px] py-[10px] xl:py-[15px] rounded-full hover:bg-green-200 transition"
            >
              ログイン / 新規登録
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        {/* Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-15 left-0 w-full bg-white shadow-md lg:hidden px-4 pb-4 overflow-hidden z-[222]"
          >
            <ul className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
              {navLinks.map((link, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <Link to={link.to} className={link.className || ""}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3 pb-3">
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition w-full text-left">
                  ログイン / 新規登録
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
