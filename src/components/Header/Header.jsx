import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import mailIcon from "../../assets/icons/mail.png";
import bellIcon from "../../assets/icons/bell.png";
import bookmarkIcon from "../../assets/icons/bookmark.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <header
      className={`border-b shadow-sm transition-colors duration-300 ${
        isLoggedIn ? "bg-green-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="text-green-600">
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/celestial-garden-hall">会場を探す</Link>
            </li>
            <li>
              <Link to="/budget-wedding">広告協賛で費用を抑える</Link>
            </li>
            <li>
              <Link to="/faq-accordion">FAQ</Link>
            </li>
            <li>
              <Link to="/contact-form-ui">お問い合わせ</Link>
            </li>
            <li>
              <Link to="/terms-of-use">利用規約</Link>
            </li>
          </ul>
        </nav>

        {/* Login / Logout */}
        <div className="hidden md:block">
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
              <button className=" py-2 text-sm font-medium">
                ログアウト
              </button>
            </div>
          ) : (
            // Show login/register when logged out
            <Link
              to="/login"
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition"
            >
              ログイン / 新規登録
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
