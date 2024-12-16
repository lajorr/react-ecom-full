import Chair from "../assets/images/chair.png";
import GucciBag from "../assets/images/gucci_bag.png";
import Joystick from "../assets/images/joystick.png";
import Keyboard from "../assets/images/keyboard.png";
import LiquidCpuCooler from "../assets/images/liquid_cpu_cooler.png";
import Monitor from "../assets/images/monitor.png";
import NorthCoat from "../assets/images/north_coat.png";
import SmallBookself from "../assets/images/small_bookself.png";

import Camera from "../assets/icons/category_camera.svg";
import CellPhone from "../assets/icons/category_cellPhone.svg";
import Computer from "../assets/icons/category_computer.svg";
import Gamepad from "../assets/icons/category_gamepad.svg";
import HeadPhone from "../assets/icons/category_headphone.svg";
import SmartWatch from "../assets/icons/category_smartWatch.svg";

import CameraSelected from "../assets/icons/category_camera_selected.svg";
import CellPhoneSelected from "../assets/icons/category_cellPhone_selected.svg";
import ComputerSelected from "../assets/icons/category_computer_selected.svg";
import GamepadSelected from "../assets/icons/category_gamepad_selected.svg";
import HeadPhoneSelected from "../assets/icons/category_headphone_selected.svg";
import SmartWatchSelected from "../assets/icons/category_smartWatch_selected.svg";

import DogFood from "../assets/images/dog_food.png";
import PS5 from "../assets/images/ps5.png";

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
    discountedPrice: "$360",
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

export const categoriesList = [
  {
    id: 1,
    name: "Phones",
    icon: CellPhone,
    selectedIcon: CellPhoneSelected,
  },
  {
    id: 2,
    name: "Computers",
    icon: Computer,
    selectedIcon: ComputerSelected,
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: SmartWatch,
    selectedIcon: SmartWatchSelected,
  },
  {
    id: 4,
    name: "Camera",
    icon: Camera,
    selectedIcon: CameraSelected,
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: HeadPhone,
    selectedIcon: HeadPhoneSelected,
  },
  {
    id: 6,
    name: "Gaming",
    icon: Gamepad,
    selectedIcon: GamepadSelected,
  },
];

export const exploreProductList = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    discountedPrice: "$100",
    ratingCount: 35,
    rating: 3,
    img: DogFood,
    isNew: false,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    discountedPrice: "$360",
    ratingCount: 95,
    rating: 4,
    img: DogFood,
    isNew: false,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    discountedPrice: "$700",
    ratingCount: 325,
    rating: 5,
    img: DogFood,
    isNew: false,
  },
  {
    id: 4,
    name: "ASUS FHD Gaming Laptop",
    discountedPrice: "$700",
    ratingCount: 325,
    rating: 5,
    img: DogFood,
    isNew: false,
  },
  {
    id: 5,
    name: "SAMSUNG 4K UHD Smart TV",
    discountedPrice: "$400",
    ratingCount: 175,
    rating: 4,
    img: DogFood,
    isNew: true,
  },
  {
    id: 6,
    name: "Apple iPhone 12 Pro",
    discountedPrice: "$500",
    ratingCount: 275,
    rating: 4,
    img: DogFood,
    isNew: false,
  },
  {
    id: 7,
    name: "Intel Core i9 12th Gen Processor",
    discountedPrice: "$600",
    ratingCount: 125,
    rating: 5,
    img: DogFood,
    isNew: true,
  },
  {
    id: 8,
    name: "Logitech G502 Hero Gaming Mouse",
    discountedPrice: "$120",
    ratingCount: 75,
    rating: 5,
    img: DogFood,
    isNew: false,
  },
];