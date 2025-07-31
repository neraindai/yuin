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
    </section>
  );
};

export default RegisterLoginSection;
