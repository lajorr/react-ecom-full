import Chair from "../assets/images/chair.png";
import Joystick from "../assets/images/joystick.png";
import Keyboard from "../assets/images/keyboard.png";
import Monitor from "../assets/images/monitor.png";

import GucciBag from "../assets/images/gucci_bag.png";
import LiquidCpuCooler from "../assets/images/liquid_cpu_cooler.png";
import NorthCoat from "../assets/images/north_coat.png";
import SmallBookself from "../assets/images/small_bookself.png";

export const catalogList = [
  {
    id: 1,
    name: "Woman's Fashion",
    hasMore: true,
  },
  {
    id: 2,
    name: "Man's Fashion",
    hasMore: true,
  },
  {
    id: 3,
    name: "Electronics",
    hasMore: false,
  },
  {
    id: 4,
    name: "Home & Lifestyle",
    hasMore: false,
  },
  {
    id: 5,
    name: "Medicine",
    hasMore: false,
  },
  {
    id: 6,
    name: "Sports & Outdoor",
    hasMore: false,
  },
  {
    id: 7,
    name: "Baby's & Toys",
    hasMore: false,
  },
  {
    id: 8,
    name: "Groceries & Pets",
    hasMore: false,
  },
  {
    id: 9,
    name: "Health & Beauty",
    hasMore: false,
  },
];

export const flashSalesList = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$160",
    discountedPrice: "$120",
    offer: "-40%",
    ratingCount: 88,
    rating: 5,
    img: Joystick,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$1160",
    discountedPrice: "$960",
    offer: "-35%",
    ratingCount: 75,
    rating: 4,
    img: Keyboard,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor ",
    price: "$400",
    discountedPrice: "$370",
    offer: "-30%",
    ratingCount: 99,
    rating: 5,
    img: Monitor,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: "$400",
    discountedPrice: "$375",
    offer: "-25%",
    ratingCount: 99,
    rating: 4,
    img: Chair,
  },
  // {
  //   id: 5,
  //   name: "S-Series Comfort Chair",
  //   price: "$400",
  //   discountedPrice: "$375",
  //   offer: "-25%",
  //   ratingCount: 99,
  //   rating: 4,
  //   img: Chair,
  // },
];

export const bestSellingProductsList = [
  {
    id: 1,
    name: "The north coat",
    price: "$360",
    discountedPrice: "$260",
    ratingCount: 65,
    rating: 5,
    img: NorthCoat,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: "$1160",
    discountedPrice: "$960",
    ratingCount: 65,
    rating: 5,
    img: GucciBag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler ",
    price: "$170",
    discountedPrice: "$160",
    ratingCount: 65,
    rating: 4,
    img: LiquidCpuCooler,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: "$360",
    ratingCount: 65,
    rating: 5,
    img: SmallBookself,
  },
  // {
  //   id: 5,
  //   name: "S-Series Comfort Chair",
  //   price: "$400",
  //   discountedPrice: "$375",
  //   offer: "-25%",
  //   ratingCount: 99,
  //   rating: 4,
  //   img: Chair,
  // },
];
