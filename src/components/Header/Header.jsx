import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
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

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition"
          >
            ログイン / 新規登録
          </Link>
        </div>

        {/* Mobile Toggle Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
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
            <li>
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition w-full text-left">
                ログイン / 新規登録
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
