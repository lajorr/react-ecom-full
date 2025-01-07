import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard.jsx";
import ContentCarousel from "../components/ContentCarousel";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import AdComponent from "../components/AdComponent";
import BgContainer from "../components/BgContainer.jsx";
import Services from "../components/Services.jsx";

import Loader from "../components/Loader.jsx";
import { getAllProducts } from "../services/ProductServices.js";
import { categoriesList } from "../utils/Constants.js";

const Home = () => {
  const countDown = {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const res = await getAllProducts();
      setProducts(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <Header />
      <main className="mt-[140px] mx-[135px]">
        <ContentCarousel
          sectionTitle="Today's"
          title="Flash Sale"
          isSlidable={true}
          hasViewAll={true}
          countDown={countDown}
          onViewAll={() => {}}
        >
          <div className="flex gap-[30px]">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContentCarousel>
        <hr className="my-[60px] h-[0.5px] w-full bg-black/30" />
        <ContentCarousel
          sectionTitle="Categories"
          title="Browse By Category"
          isSlidable={true}
        >
          <div className="flex gap-[30px]">
            {categoriesList.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </ContentCarousel>
        <hr className="my-[60px] h-[0.5px] w-full bg-black/30" />
        <ContentCarousel
          sectionTitle="This Month"
          title="Best Selling Products"
          isSlidable={false}
          hasViewAll={true}
          onViewAll={() => {}}
        >
          <div className="flex gap-[30px]">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContentCarousel>
        <AdComponent />
        <ContentCarousel
          sectionTitle="Our Products"
          title="Explore Our Products"
          isSlidable={true}
          hasViewAll={true}
          onViewAll={() => {
            console.log(products);
          }}
        >
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="grid grid-cols-4 gap-[30px]">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </ContentCarousel>

        <ContentCarousel
          className="mt-[140px]"
          sectionTitle="Featured"
          title="New Arrival"
          isSlidable={false}
          hasViewAll={false}
          onViewAll={() => {}}
        >
          <div className="grid grid-cols-4 grid-rows-2 gap-[30px] h-[600px] w-full">
            <BgContainer bg={"bg-ps5"} rowsSpan={2} colsSpan={2}>
              <div className="text-white size-full flex flex-col gap-4 items-start justify-end">
                <h1 className="font-[600] text-[24px] leading-6 ">
                  PlayStation 5
                </h1>
                <p className="max-w-[245px] text-[14px] font-[400] leading-5 ">
                  Black and White version of the PS5 coming out on sale
                </p>
                <button className="font-[500] text-[16px] leading-6 underline">
                  Shop Now
                </button>
              </div>
            </BgContainer>
            <BgContainer
              bg={"bg-ps5"}
              bgPosition={"bg-right-bottom"}
              colsSpan={2}
            >
              <div className="text-white size-full  flex flex-col gap-4 items-start justify-end">
                <h1 className="font-[600] text-[24px] leading-6 ">
                  PlayStation 5
                </h1>
                <p className="max-w-[245px] text-[14px] font-[400] leading-5 ">
                  Black and White version of the PS5 coming out on sale
                </p>
                <button className=" font-[500] text-[16px] leading-6 underline">
                  Shop Now
                </button>
              </div>
            </BgContainer>
            <BgContainer bg={"bg-ps5"}>
              <div className="text-white size-full  flex flex-col gap-4 items-start justify-end">
                <h1 className="font-[600] text-[24px] leading-6 ">
                  PlayStation 5
                </h1>
                <p className="max-w-[245px] text-[14px] font-[400] leading-5 ">
                  Black and White version of the PS5 coming out on sale
                </p>
                <button className=" font-[500] text-[16px] leading-6 underline">
                  Shop Now
                </button>
              </div>
            </BgContainer>
            <BgContainer bg={"bg-ps5"}>
              <div className="text-white size-full  flex flex-col gap-4 items-start justify-end">
                <h1 className="font-[600] text-[24px] leading-6 ">
                  PlayStation 5
                </h1>
                <p className="max-w-[245px] text-[14px] font-[400] leading-5 ">
                  Black and White version of the PS5 coming out on sale
                </p>
                <button className=" font-[500] text-[16px] leading-6 underline">
                  Shop Now
                </button>
              </div>
            </BgContainer>
          </div>
        </ContentCarousel>
        <Services />
      </main>
    </div>
  );
};

export default Home;
