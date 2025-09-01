import { venue5 } from '../../assets';
import { motion } from "framer-motion";
const OverlayContent = ({title, description, reverseColumn}) =>{
    return (<>
    {!reverseColumn ? (
        <>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-6 relative mb-8 lg:mb-10 xl:mb-12">
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
            className="relative mt-5 lg:mt-10 mb-10 py-8 lg:py-10 px-8 lg:px-10 w-[96%] lg:w-[495px] bg-[#F7F8F1] rounded-[25px] before:content-[''] before:bg-[#C3F1D6] before:absolute before:right-[-4%] lg:before:right-[-20px] before:bottom-[-20px] before:h-full before:w-full before:rounded-[25px] before:z-[-1] lg:-ml-[165px] align-center flex flex-col justify-start"
            >
            <h3 className="text-nm md:text-base lg:text-baselg font-bold text-primary-text font-yugothic mb-2 after:content-[''] after:flex after:w-100 after:h-[1px] after:bg-black after:mt-[8px] after:mb-[15px]">{title}</h3>
            <p className="font-yugothic font-medium text-smd md:text-nm lg:base">
            {description}
            </p>
            </motion.div>
        </div>
        </>
        ) : (<>
            <div className="lg:flex lg:flex-row-reverse justify-center lg:gap-6 relative mb-8 lg:mb-10 xl:mb-12">
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
            className="relative py-8 lg:py-10 px-8 lg:px-10 mt-5 lg:mt-10 mb-10 w-[95%] lg:w-[495px] bg-[#F7F8F1] rounded-[25px] lg:-mr-[165px] before:content-[''] before:bg-[#C3F1D6] before:absolute before:right-[-4%] lg:before:left-[-20px] before:bottom-[-20px] before:h-full before:w-full before:rounded-[25px] before:z-[-1] align-center flex flex-col justify-start"
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