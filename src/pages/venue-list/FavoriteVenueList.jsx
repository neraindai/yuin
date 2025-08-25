import FavoriteVenueCard from "../../components/ExtraComponent/FavoriteVenueCard";
import venue from "../../assets/images/venue.jpg";
import Pagination from "../../components/ExtraComponent/Pagination";
import Footer from "../../components/Footer/Footer";
import DecorativeDivider from "../../components/ExtraComponent/DecorativeDivider";
import HeroMiniImage from "../../components/HeroMiniImage";
import VenueListBanner from "../../assets/images/VenueListBanner.png";
import Header from "../../components/Header/Header";
import VenueSearchBar from "../../components/SearchSection/VenueSearchBar";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";
import BridalRealtedList from "../../components/ExtraComponent/BridalRelatedList";

const FavoriteVenueList = () => {
  const venues = [
    {
      imageUrl: venue,
      title: "セレスティアルガーデンホール",
      description:
        "自然光が差し込むガーデン付きチャペルで、緑に囲まれたロマンチックなセレモニーを実現。都心にありながらリゾート気分を味わえる人気の式場です。",
      tag1: "50人",
      tag2: "飲食無し / 人前式",
    },
    {
      imageUrl: venue,
      title: "ブランルージュ表参道",
      description:
        "モダンで洗練された空間が特徴の式場。ゲストとの距離が近く、アットホームな雰囲気での挙式が叶います。料理の評判も高く、おもてなし重視の方におすすめ。",
      tag1: "80人",
      tag2: "飲食あり / 教会式",
    },
    {
      imageUrl: venue,
      title: "グレイスチャペル銀座",
      description:
        "白を基調としたクラシックなチャペルが魅力。銀座駅から徒歩3分の好立地で、遠方からのゲストも安心。伝統とモダンが融合した人気の式場。",
      tag1: "60人",
      tag2: "飲食あり / 人前式",
    },
    {
      imageUrl: venue,
      title: "ザ・リッツ東京ガーデン",
      description:
        "高層階からの夜景が楽しめるラグジュアリーなホテルウェディング。上質なおもてなしと非日常の空間で、特別な一日を演出します。",
      tag1: "100人",
      tag2: "飲食あり / 教会式",
    },
  ];

  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={VenueListBanner}>
        {/* Search Bar Component */}
        <VenueSearchBar />
      </HeroMiniImage>

      <section className="py-12 bg-gray-50">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-700">
            お気に入り結婚式場一覧
          </h2>
          <p className="text-sm text-gray-500 mt-1">合計お気に入り数：全38件</p>
        </div> */}

        <SectionHeader
          sectionTitle="お気に入り結婚式場一覧"
          shortDescription="合計お気に入り数：全38件"
        />

        <div className="flex flex-col gap-6 items-center">
          {venues.map((venue, index) => (
            <FavoriteVenueCard key={index} {...venue} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination />

        {/* Divider Line */}
        <DecorativeDivider />
      </section>

      <div className="mt-8">
        <BridalRealtedList />
      </div>

      {/* Footer part */}
      <Footer />
    </>
  );
};

export default FavoriteVenueList;
