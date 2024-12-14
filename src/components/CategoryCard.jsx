import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="group">
      <div className="h-[145px] w-[170px] rounded-[4px] border border-black/30 py-6 cursor-pointer  group-hover:bg-secondary2">
        <img
          className="group-hover:hidden mx-auto"
          src={category.icon}
          alt="icon"
        />
        <img
          className="hidden group-hover:block mx-auto"
          src={category.selectedIcon}
          alt="selected icon"
        />
        <p className="text-[16px] mt-4 text-center group-hover:text-white ">
          {category.name}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
