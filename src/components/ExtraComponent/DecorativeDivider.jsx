import { dividershape } from '../../assets';

const DecorativeDivider = () => {
  return (
    <div className="flex justify-center my-[30px] lg:my-[60px]">
      <img src={dividershape}  alt="divider" className="w-auto"/>
    </div>
  );
};

export default DecorativeDivider;
