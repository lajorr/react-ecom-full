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

import CustomerServiceIcon from "../assets/icons/customer_service_icon.svg";
import DeliveryIcon from "../assets/icons/delivery_icon.svg";
import SecureIcon from "../assets/icons/secure_icon.svg";

import IconMoneybag from "../assets/icons/icon_moneybag.svg";
import IconMoneybagSelected from "../assets/icons/icon_moneybag_selected.svg";
import IconSale from "../assets/icons/icon_sale.svg";
import IconSaleSelected from "../assets/icons/icon_sale_selected.svg";
import IconShop from "../assets/icons/icon_shop.svg";
import IconShopSelected from "../assets/icons/icon_shop_selected.svg";
import IconShoppingBag from "../assets/icons/Icon_shopping_bag.svg";
import IconShoppingBagSelected from "../assets/icons/icon_shopping_bag_selected.svg";

import EmmaWatson from "../assets/images/emma_watson.png";
import TomCruise from "../assets/images/tom_cruise.png";
import WillSmith from "../assets/images/will_smith.png";

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

export const serviceList = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: DeliveryIcon,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: CustomerServiceIcon,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: SecureIcon,
  },
];

export const achievementList = [
  {
    id: 1,
    value: "10.5k",
    description: "Sallers active our site",
    icon: IconShop,
    selectedIcon: IconShopSelected,
  },
  {
    id: 2,
    value: "33k",
    description: "Mopnthly Produduct Sale",
    icon: IconSale,
    selectedIcon: IconSaleSelected,
  },
  {
    id: 3,
    value: "45.5k",
    description: "Customer active in our site",
    icon: IconShoppingBag,
    selectedIcon: IconShoppingBagSelected,
  },
  {
    id: 4,
    value: "25k",
    description: "Anual gross sale in our site",
    icon: IconMoneybag,
    selectedIcon: IconMoneybagSelected,
  },
];

export const memberList = [
  {
    id: 1,
    name: "Tom Cruise",
    position: "Founder & Chairman ",
    img: TomCruise,
  },
  {
    id: 2,
    name: "Emma Watson",
    position: "Founder & Chairman ",

    img: EmmaWatson,
  },
  {
    id: 3,
    name: "Will Smith",
    position: "Founder & Chairman ",

    img: WillSmith,
  },
];
