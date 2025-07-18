import { Link } from 'react-router-dom';
import { logo} from '../../assets';
import styles from './Header.module.scss';
const Header = () => {
  return (
     <header className={`${styles.headerCustom} bg-white border-b shadow-sm`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className={`flex items-center space-x-2 ${styles.logoCstsize}`}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu */}
        <nav className="flex-1 ml-10">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li><Link to="/" className="text-green-600">ホーム</Link></li>
            <li><Link to="#">会場を探す</Link></li>
            <li><Link to="#">広告協賛で費用を抑える</Link></li>
            <li><Link to="#">FAQ</Link></li>
            <li><Link to="#">お問い合わせ</Link></li>
            <li><Link to="#">利用規約</Link></li>
          </ul>
        </nav>

        {/* Login Button */}
        <div>
          <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition">
            ログイン / 新規登録
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
