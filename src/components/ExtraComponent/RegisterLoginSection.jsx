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

      <div className="container mx-auto">
        <h2 className="md:text-3xl font-bold mb-2 heading">結婚式場一覧</h2>
        <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">
          特別な瞬間にふさわしい会場を簡単検索！人気の会場や最新トレンドも一挙紹介！
        </p>
      </div>
    </section>
  );
};

export default RegisterLoginSection;
