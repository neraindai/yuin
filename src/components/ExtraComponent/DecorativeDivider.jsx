import { dividershape } from '../../assets';

const DecorativeDivider = () => {
  return (
    <div className="flex justify-center mt-[32px] md:mt-[48px] lg:mt-[60px]">
    {/* <div className="flex justify-center"> */}
      <img src={dividershape}  alt="divider" className="w-auto"/>
    </div>
  );
};

export default DecorativeDivider;
