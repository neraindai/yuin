import appleMusic from "../../assets/budget/apple_music.png";
import bmw from "../../assets/budget/bmw.png";
import figma from "../../assets/budget/figma.png";
import flowmapp from "../../assets/budget/flowmapp.png";
import jbToolboxApp from "../../assets/budget/jb_toolbox_app.png";
import mailchimp from "../../assets/budget/mailchimp.png";
import microsoft from "../../assets/budget/microsoft.png";
import xbox from "../../assets/budget/ms_xbox.png";
import netflix from "../../assets/budget/netflix.png";
import paypal from "../../assets/budget/paypal.png";
import playstation from "../../assets/budget/playstation.png";
import shazam from "../../assets/budget/shazam.png";
import soundCloud from "../../assets/budget/sound_cloud.png";
import stripe from "../../assets/budget/stripe.png";
import whatsapp from "../../assets/budget/whatsapp.png";
import youtube from "../../assets/budget/youtube.png";

const BudgetSection = () => {
  const iconsRow1 = [
    mailchimp,
    playstation,
    paypal,
    xbox,
    bmw,
    soundCloud,
    shazam,
    figma,
  ];

  const iconsRow2 = [
    flowmapp,
    youtube,
    microsoft,
    appleMusic,
    whatsapp,
    netflix,
    stripe,
    jbToolboxApp,
  ];

  return (
    <div className="text-center my-12">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-4">
        費用を抑えて結婚式を挙げたい方へ
      </h2>
      <div className="w-1/2 mx-auto border-t border-green-200 mb-8"></div>

      {/* Icons Row 1 */}
      <div className="flex justify-center gap-12 mb-6 flex-wrap">
        {iconsRow1.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="w-17 h-17 object-contain"
          />
        ))}
      </div>

      {/* Icons Row 2 */}
      <div className="flex justify-center gap-12 flex-wrap">
        {iconsRow2.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="w-17 h-17 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetSection;
