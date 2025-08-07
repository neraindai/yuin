import VenueCard from '../ExtraComponent/VenueCard';
import Pagination from './Pagination';

export default function VenueList() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Filter Bar */}
      <div className="flex gap-4 mb-6">
        <select className="border rounded px-4 py-2 flex-1">
          <option>エリア</option>
        </select>
        <select className="border rounded px-4 py-2 flex-1">
          <option>条件をしぼりこむ</option>
        </select>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          検索
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2">お気に入り結婚式場一覧</h1>
      <p className="text-center text-gray-500 mb-8">合計お気に入り数：全3件</p>

      {/* Cards */}
      <div className="space-y-6">
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>


    </div>
  );
}
