import Roadmap from "../components/Roadmap";

import OurStoryImage from "../assets/images/our_story_image.png";

import Services from "../components/Services";
import { achievementList, memberList } from "../utils/Constants";

const About = () => {
  return (
    <>
      <Roadmap path="About" />
      <section className=" ml-[135px] mb-[140px]">
        <div className="flex gap-[75px] justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="font-[600] text-[54px] mb-[40px]">Our Story</h1>
            <p className="text-[16px] mb-6 ">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-[16px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src={OurStoryImage} alt="two african girls" />
        </div>
        <div className="my-[140px] flex gap-[30px]">
          {achievementList.map((item) => (
            <div key={item.id} className="group w-[270px]">
              <div className="border border-black/30 rounded-[4px] py-[30px] group-hover:bg-secondary2 group-hover:animate-bounce group-hover:border-none transition-all duration-300 ">
                <div className="bg-[#2F2E30]/30 size-[80px] rounded-full flex justify-center items-center mb-6 mx-auto group-hover:bg-white/30">
                  <div className="bg-black size-[58px] rounded-full flex justify-center items-center group-hover:bg-white">
                    <img
                      className="size-[40px] group-hover:invert transition-all duration-300 group-hover:animate-spin"
                      src={item.icon}
                      alt="shop icon"
                    />
                  </div>
                </div>

                <h1 className="font-bold text-[32px] mb-3 text-center group-hover:text-white">
                  {item.value}
                </h1>
                <p className="text-[16px] text-center group-hover:text-white ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[30px]">
          {memberList.map((item) => (
            <div key={item.id} className="w-[370px]">
              <div className=" h-[430px] rounded-[4px] mb-8 bg-secondary flex justify-center items-end ">
                <img className="" src={item.img} alt="image" />
              </div>
              <h2 className="font-[500] text-[32px] mb-2">{item.name}</h2>
              <p className="text-[16px]">{item.position}</p>
            </div>
          ))}
        </div>
        <Services/>
      </section>
    </>
  );
};

export default About;
