import { motion } from "framer-motion";
import StepCard from './StepCard';
import DecorativeDivider from './DecorativeDivider';
import { steps1,steps2,steps3,steps4,steps5} from '../../assets';
import SectionHeader from "./SectionHeader";
const steps = [
  {
    image: steps1,
    title: '会場検索 & お気に入り登録',
    description: '理想の結婚式場を簡単検索。気になる会場はお気に入りに登録して、いつでも見返せます。',
    number: '01',
  },
  {
    image: steps2,
    title: '新規登録(仮) → インタビュー日程調整',
    description: '理想の結婚式場を簡単検索。気になる会場はお気に入りに登録して、いつでも見返せます。',
    number: '02',
  },
  {
    image: steps3,
    title: '面接後、本登録完了 費用負担サービスの正式申し込み',
    description: '理想の結婚式場を簡単検索。気になる会場はお気に入りに登録して、いつでも見返せます。',
    number: '03',
  },
  {
    image: steps4,
    title: '会場予約とのやりとり開始',
    description: '理想の結婚式場を簡単検索。気になる会場はお気に入りに登録して、いつでも見返せます。',
    number: '04',
  },
  {
    image: steps5,
    title: '会場決定→費用負担',
    description: '理想の結婚式場を簡単検索。気になる会場はお気に入りに登録して、いつでも見返せます。',
    number: '05',
  }  
];
const StepComponent = () => {
  return (
    
    <div className="container mx-auto">
      <DecorativeDivider/>
      <SectionHeader sectionTitle="サービスの流れ" shortDescription="「ゆいのね」では、おふたりの想いに寄り添いながら、結婚式当日まで安心して進められるサポートをご提供しています。ご相談から当日までのステップを丁寧にご案内します。" />
      <div className="mb-8">
        <motion.div
          className="flex flex-wrap justify-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
              <StepCard key={index} {...step} />
          ))}
        </motion.div>
        <div className="flex align-center justify-center mt-8">
          <button className="bg-green-100 hover:bg-green-200 font-semibold pl-12 pr-12 py-3 rounded-full transition shadow-md text-primary">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;