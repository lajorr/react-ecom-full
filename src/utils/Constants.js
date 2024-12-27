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

export const billingFormFields = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    isRequired: true,
  },
  {
    id: 2,
    label: "Company Name",
    name: "companyName",
    isRequired: false,
  },
  {
    id: 3,
    label: "Street Address",
    name: "streetAddress",
    isRequired: true,
  },
  {
    id: 4,
    label: "Apartment, floor, etc. (optional)",
    name: "apartment",
    isRequired: false,
  },
  {
    id: 5,
    label: "Town/City",
    name: "townCity",
    isRequired: true,
  },
  {
    id: 6,
    label: "Phone Number",
    name: "phoneNumber",
    isRequired: true,
  },
  {
    id: 7,
    label: "Email Address",
    name: "emailAddress",
    isRequired: true,
  },
];
