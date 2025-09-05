import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import FaqBanner from "../../assets/images/FAQbanner.png";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";

export default function TermsOfUse() {
  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={FaqBanner} />

      <section className="flex justify-center items-center">
        <div className="container rounded-3xl p-10">
          {/* Main Title */}
          {/* <h1 className="text-center text-green-700 text-2xl font-bold mb-10">
            利用規約
          </h1> */}

          <div className="mb-[30px] md:mb-[48px] lg:mb-[60px]">
            <SectionHeader sectionTitle="利用規約" noborder/>
          </div>

          {/* Content Box */}
          <div className="w-full">
            <div className="text-center">
              <SectionHeader sectionTitle="利用規約" shortDescription="このたびは、[あなたのサイト名]（以下、「当サイト」といいます）をご利用いただきありがとうございます。以下の利用規約（以下、「本規約」といいます）をよくお読みいただき、ご同意のうえでご利用ください" colorBlack smallHeading />
            </div>

            <h3 className="font-yugothic font-bold mb-2 text-black">施行日：[日付を入力]</h3>
            <h3 className="font-yugothic font-bold mb-6 text-black">最終更新日：[日付を入力]</h3>

            <h3 className="font-yugothic font-bold mb-2 text-black">第1条（規約への同意）</h3>
            <p className="mb-6">
              本サイトをご利用いただくことで、本規約およびプライバシーポリシーに同意いただいたものとみなします。
              ご同意いただけない場合は、サイトのご利用をお控えください。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第2条（サービス内容）</h3>
            <p className="mb-6">
              当サイトは、結婚式場を検索・比較・予約するためのプラットフォームを提供しています。
              実際の式場運営は第三者（式場運営者）によって行われ、当サイトは仲介役として機能します。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第3条（ユーザー登録）</h3>
            <p className="mb-6">
              予約には正確な個人情報の登録が必要です。登録された情報に誤りがあった場合、サービス提供に支障が出ることがありますのでご注意ください。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第4条（予約およびお支払い）</h3>
            <ul className="list-disc list-inside mb-6 text-black">
              <li>
                すべての予約は空き状況および式場側の承認により確定されます。
              </li>
              <li>
                表示されている料金は[通貨を入力]であり、特記なき限り税込価格です。
              </li>
              <li>
                ご予約時、所定の予約金または全額の支払いが必要となる場合があります。
              </li>
              <li>
                支払い方法は、クレジットカード、銀行振込など指定の方法に限ります。
              </li>
            </ul>

            <h3 className="font-yugothic font-bold mb-2 text-black">第5条（キャンセル・変更）</h3>
            <p className="mb-6">
              キャンセルおよび変更ポリシーは式場によって異なります。各式場の規定をご確認のうえでご予約ください。
              場合によってはキャンセル料が発生します。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第6条（禁止事項）</h3>
            <ul className="list-disc list-inside mb-6 text-black">
              <li>虚偽の情報登録</li>
              <li>無断キャンセルの繰り返し</li>
              <li>サイトの運営を妨げる行為</li>
              <li>不正アクセスや第三者になりすます行為</li>
            </ul>

            <h3 className="font-yugothic font-bold mb-2 text-black">第7条（免責事項）</h3>
            <p className="mb-6">
              当サイトは、提供情報の正確性・完全性について保証するものではありません。
              ご利用は自己責任にてお願いいたします。また、式場との契約・トラブルについては当サイトは責任を負いかねます。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第8条（規約の改定）</h3>
            <p className="mb-6">
              当サイトは、必要に応じて本規約を変更することができます。重要な変更がある場合は、事前に通知いたします。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">第9条（準拠法・管轄）</h3>
            <p className="mb-6">
              本規約は日本法に準拠し、当サイトに関するすべての紛争は、[運営会社所在地]を管轄とする裁判所を第一審の専属的合意裁判所とします。
            </p>

            <h3 className="font-yugothic font-bold mb-2 text-black">お問い合わせ</h3>
            <p>
              本規約に関するご質問は、[お問い合わせフォームまたはメールアドレス]までご連絡ください。
            </p>
          </div>
        </div>
      </section>

      {/* Footer part */}
      <Footer />
    </>
  );
}
