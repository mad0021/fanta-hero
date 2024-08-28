import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta3 from "../assets/fanta3.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta4 from "../assets/fanta4.png";
import Fanta5 from "../assets/fanta5.png";
import Fanta6 from "../assets/fanta6.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Fanta Orange is available in almost every country. It is the original flavor that was created back in 1940 as a Nazi substitute of Coca-Cola. It exists both as a consumer product and as a fountain drink. Fanta Orange tends to taste differently around the world. This is because of the different nutritional ingredient rules.",
    oldPrice: "9,99 €",
    price: "6,57 €",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Coca-Cola is a carbonated soft drink sold in stores, restaurants, and vending machines in more than 200 countries. It is produced by The Coca-Cola Company of Atlanta, Georgia, and is often referred to simply as Coke, a registered trademark of The Coca-Cola Company in the United States since March 27, 1944. Originally intended as a patent medicine when it was invented in the late 19th century by John Pemberton, Coca-Cola was bought out by businessman Asa Griggs Candler, whose marketing tactics led Coke to its dominance of the world soft-drink market throughout the 20th century.",
    oldPrice: "9,99 €",
    price: "7,68 €",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
  {
    id: 3,
    image: Fanta2,
    title: "Pepsi",
    subtitle:
      "Pepsi is a carbonated soft drink with a cola flavor, manufactured by PepsiCo. Pepsi, originally created in 1893 by Caleb Bradham and named Brad's Drink, was first sold in his drugstore in New Bern, North Carolina. Renamed Pepsi-Cola in 1898 due to its supposed digestive benefits, it was shortened to Pepsi in 1961. The beverage formula initially included sugar and vanilla but not pepsin, despite speculation on the origin of its name",
    oldPrice: "9,99 €",
    price: "8,65 €",
    modal: "Pepsi",
    bgColor: "#004B93",
  },
  {
    id: 4,
    image: Fanta4,
    title: "Monster Energy",
    subtitle:
      "Monster Energy is an energy drink that was created by Hansen Natural Company (now Monster Beverage Corporation) in April 2002. Monster Energy is known for their sponsorship and support for extreme sports events",
    oldPrice: "6,99 €",
    price: "3,90 €",
    modal: "Monster",
    bgColor: "#95D600",
  },
  {
    id: 5,
    image: Fanta5,
    title: "Red Bull",
    subtitle:
      "Red Bull is a brand of energy drinks created and owned by the Austrian company Red Bull GmbH. With a market share of 43%, it is the most popular energy drink brand as of 2020, and the third most valuable soft drink brand behind Coca-Cola and Pepsi. Since its launch in 1987, more than 100 billion cans of Red Bull have been sold worldwide, including over 11.5 billion in 2022.",
    oldPrice: "8,99 €",
    price: "5,49 €",
    modal: "Red Bull",
    bgColor: "#8D8F93",
  },
  {
    id: 6,
    image: Fanta6,
    title: "Sprite",
    subtitle:
      "Sprite was first introduced by The Coca-Cola Company in 1961 as a response to the popularity of 7 Up, a lemon-lime soda that had been on the market since the late 1920s. Coca-Cola saw an opportunity to enter the lemon-lime soda market and compete with 7 Up by creating their own lemon-lime flavored soda. The company's research and development team worked on creating a formula that would appeal to consumers, and in 1961, Sprite was release",
    oldPrice: "3,99 €",
    price: "2,69 €",
    modal: "Sprite",
    bgColor: "#008B47",
  }
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white"
      >
        {/* navbar components */}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* ______ Headphone Info ______ */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* ______ Headphone List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* Headphone list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      key={item.id} // Add key prop here
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        onClick={() => handleActiveData(item)}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${
                              activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                          />
                        </div>
                        <div className="!mt-6 space-y-1 text-center">
                          <p className="text-base line-through opacity-50">
                            {item.oldPrice}
                          </p>
                          <p className="text-xl font-bold">{item.price}</p>
                          {/* <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p> */}
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* ______ WhatsApp Icon ______ */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
