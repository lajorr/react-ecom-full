import React from "react";
import ContentCarousel from "../components/ContentCarousel";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-[140px] mx-[135px]">
        <ContentCarousel sectionTitle={"Today's"} title={"Flash Sale"} />
      </main>
    </div>
  );
};

export default Home;
