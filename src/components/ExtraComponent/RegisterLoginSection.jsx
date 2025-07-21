import DecorativeDivider from './DecorativeDivider';
import ActionCard from './ActionCard';

const RegisterLoginSection = () => {
  return (
    <section className="px-4 py-12 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        <ActionCard
          label="会員登録すれば、よりお得な情報が見れます！"
          buttonText="今すぐ登録"
        />
        <ActionCard
          label="会員の方はこちら"
          buttonText="ログイン"
        />
      </div>

      <DecorativeDivider />

      <div className="mt-6">
        <h2 className="text-green-700 text-2xl md:text-3xl font-bold mb-2">結婚式場一覧</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          特別な瞬間にふさわしい会場を簡単検索！人気の会場や最新トレンドも一挙紹介！
        </p>
      </div>
    </section>
  );
};

export default RegisterLoginSection;
