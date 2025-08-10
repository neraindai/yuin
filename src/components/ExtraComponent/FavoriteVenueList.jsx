import React from 'react';
import FavoriteVenueCard from './FavoriteVenueCard';
import venue from '../../assets/images/venue.jpg';
import Pagination from './Pagination';

const FavoriteVenueList = () => {
  const venues = [
    {
      imageUrl: venue,
      title: 'セレスティアルガーデンホール',
      description:
        '自然光が差し込むガーデン付きチャペルで、緑に囲まれたロマンチックなセレモニーを実現。都心にありながらリゾート気分を味わえる人気の式場です。',
      tag1: '50人',
      tag2: '飲食無し / 人前式',
    },
    {
      imageUrl: venue,
      title: 'ブランルージュ表参道',
      description:
        'モダンで洗練された空間が特徴の式場。ゲストとの距離が近く、アットホームな雰囲気での挙式が叶います。料理の評判も高く、おもてなし重視の方におすすめ。',
      tag1: '80人',
      tag2: '飲食あり / 教会式',
    },
    {
      imageUrl: venue,
      title: 'グレイスチャペル銀座',
      description:
        '白を基調としたクラシックなチャペルが魅力。銀座駅から徒歩3分の好立地で、遠方からのゲストも安心。伝統とモダンが融合した人気の式場。',
      tag1: '60人',
      tag2: '飲食あり / 人前式',
    },
    {
      imageUrl: venue,
      title: 'ザ・リッツ東京ガーデン',
      description:
        '高層階からの夜景が楽しめるラグジュアリーなホテルウェディング。上質なおもてなしと非日常の空間で、特別な一日を演出します。',
      tag1: '100人',
      tag2: '飲食あり / 教会式',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-green-700">お気に入り結婚式場一覧</h2>
        <p className="text-sm text-gray-500 mt-1">合計お気に入り数：全38件</p>
      </div>

      <div className="flex flex-col gap-6 items-center">
        {venues.map((venue, index) => (
          <FavoriteVenueCard key={index} {...venue} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </section>
  );
};

export default FavoriteVenueList;
