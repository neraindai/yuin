import { venue5 } from '../../assets';
import { motion } from "framer-motion";
const OverlayContent = ({title, description, reverseColumn}) =>{
    return (<>
    {!reverseColumn ? (
        <>
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative mb-8 lg:mb-10 xl:mb-12">
            {/* Image */}
            <motion.div
            initial={{ opacity: 0, x: 90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md"
            >
            <img src={venue5} alt="会場1" className="w-full h-full object-cover" />
            </motion.div>

            {/* content side */}
            <motion.div
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-5 lg:py-2 w-full lg:w-[495px] bg-[#F7F8F1] rounded-[25px] lg:-ml-[165px] pl-9 pr-9 z-10 mt-0 md:mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
            >
            <h3 className="text-nm md:text-base lg:text-baselg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">{title}</h3>
            <p className="font-yugothic font-medium text-smd md:text-nm lg:base">
            {description}
            </p>
            </motion.div>
        </div>
        </>
        ) : (<>
            <div className="lg:flex lg:flex-row-reverse justify-center gap-6 relative mb-8 lg:mb-10 xl:mb-12">
            {/* Image */}
            <motion.div
            initial={{ opacity: 0, x: 90 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[793px] h-[445px] rounded-[45px] overflow-hidden shadow-md"
            >
            <img src={venue5} alt="会場1" className="w-full h-full object-cover" />
            </motion.div>

            {/* content side */}
            <motion.div
            viewport={{ once: false }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-5 lg:py-2 w-full lg:w-[495px] bg-[#F7F8F1] rounded-[25px] lg:-mr-[165px] pl-9 pr-9 z-10 mt-5 md:mt-10 mb-10 align-center shadow-custom-green flex flex-col justify-center"
            >
            <h3 className="text-nm md:text-base lg:text-baselg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">{title}</h3>
            <p className="font-yugothic font-medium text-smd md:text-nm lg:base">
            {description}
            </p>
            </motion.div>
        </div>
        </>)}
        
    </>)
}

export default OverlayContent;