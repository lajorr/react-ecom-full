import React from "react";
import ContentCarousel from "../components/ContentCarousel";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import { bestSellingProductsList, flashSalesList } from "../utils/Constants.js";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-[140px] mx-[135px]">
        <ContentCarousel
          sectionTitle={"Today's"}
          title={"Flash Sale"}
          isSlidable={true}
          hasViewAll={true}
          onViewAll={() => {}}
        >
          <div className="flex gap-[30px] overflow-auto">
            {flashSalesList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContentCarousel>
        <hr className="my-[60px] h-[0.5px] w-full bg-black/30" />

        <ContentCarousel
          sectionTitle={"Categories"}
          title={"Browse By Category"}
          isSlidable={true}
        >
          <div className="flex gap-[30px] overflow-auto">
            {flashSalesList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContentCarousel>

        <hr className="my-[60px] h-[0.5px] w-full bg-black/30" />
        <ContentCarousel
          sectionTitle={"This Month"}
          title={"Best Selling Products"}
          isSlidable={false}
          onViewAll={() => {}}
        >
          <div className="flex gap-[30px] overflow-auto">
            {bestSellingProductsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContentCarousel>
      </main>
    </div>
  );
};

export default Home;
