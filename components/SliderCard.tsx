import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  return (
    <motion.div
      className=" relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[208px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className=" absolute h-full w-full  rounded-2xl  object-cover brightness-50 "
      />
      <motion.div className=" absolute z-10 flex h-full items-end p-5">
        <motion.div>
          <motion.div
            layout
            className=" "
          ></motion.div>
          <motion.p layoutId={data.features} className="text-xs text-[#D5D5D6]">
            {data.features }
          </motion.p>
          <motion.h1
            layoutId={data.name}
            className="text-xl leading-6 text-white"
          >
            {data.name}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;