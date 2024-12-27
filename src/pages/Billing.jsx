import BankIcons from "../assets/icons/bank_icons.svg";
import Breadcrumbs from "../components/Breadcrumbs";
import MyButton from "../components/MyButton";
import MyInputField from "../components/MyInputField";
import { useCartContext } from "../provider/CartProvider";
import { billingFormFields } from "../utils/Constants";
const Billing = () => {
  const cartContext = useCartContext();
  const cartItems = cartContext.cartItems;

  return (
    <>
      <Breadcrumbs path={"checkout"} />
      <h1 className="font-[500] text-[36px] mb-12 mx-[135px]">
        Billing Details
      </h1>
      <div className="flex gap-[173px] mb-[140px] mx-[135px]">
        <form action="" className="flex flex-col gap-8">
          {billingFormFields.map((item) => (
            <MyInputField
              key={item.id}
              label={item.label}
              isRequired={item.isRequired}
              name={item.name}
            />
          ))}
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="size-6 accent-secondary2 " />
            <p className="text-[16px]">
              Save this information for faster check-out next time
            </p>
          </div>
        </form>
        <div className="flex flex-col gap-8 size-full mt-8 ">
          {cartItems.length === 0 && <p>No items in cart</p>}
          {cartItems.map((item) => {
            const cartProduct = item.cartProduct;
            return (
              <div
                key={cartProduct.product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center text-[16px]">
                  <img
                    src={cartProduct.product.image}
                    className="size-[54px] object-contain mr-6"
                  />
                  <p className="max-w-[150px] truncate ">
                    {cartProduct.product.title}
                  </p>
                  <p>X{cartProduct.quantity}</p>
                </div>
                <p className="text-[16px]">${cartProduct.subTotal}</p>
              </div>
            );
          })}

          <div>
            <div className="flex justify-between text-[16px]">
              <p>Subtotal</p>
              <p>${cartContext.calculateTotal().toFixed(2)}</p>
            </div>
            <hr className="bg-black/40 my-4 " />
            <div className="flex justify-between text-[16px]">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr className="bg-black/40 my-4 " />
            <div className="flex justify-between text-[16px] mb-4">
              <p>Total</p>
              <p>${cartContext.calculateTotal().toFixed(2)}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <input
                type="radio"
                name="paymentType"
                className="size-6 accent-black"
              />
              <p className="text-[16px]">Bank</p>
            </div>
            <img src={BankIcons} />
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              name="paymentType"
              className="size-6 accent-black"
            />
            <p className="text-[16px]">Cash on delivery</p>
          </div>
          <div className="flex gap-4 h-min w-max">
            <input
              type="text"
              className="border border-black rounded-[4px] text-[16px] py-4 px-6"
              placeholder="Coupon Code"
            />
            <MyButton>Apply Coupon</MyButton>
          </div>
          <MyButton className="w-max">Place Order</MyButton>
        </div>
      </div>
    </>
  );
};

export default Billing;
