"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import { StoreContext } from "../../context";

const CartItems = () => {
  const { cartData, setCartData } = useContext(StoreContext);

  const removeItem = (event, id, title) => {
    event.preventDefault();
    const filteredItem = cartData.filter((item) => {
      return item.id !== id;
    });

    setCartData([...filteredItem]);

    toast.success(`${title} has been removed from the Cart successfully!`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl pb-4">{cartData.length} Items in Cart</h2>
      <ul>
        {cartData.map((item) => (
          <li key={item.id} className="p-2 m-2 rounded-md flex bg-gray-200">
            <Image src={item.cover} width={50} height={50} alt={item.cover} />

            <div className="flex flex-col pt-1 ml-2">
              <span className="text-sm">{item.title}</span>

              <p className="ml-1 pt-1 text-slate-500">
                {item.type === "Buy"
                  ? `${item.sellPrice} BDT`
                  : `${item.rentPrice} BDT/PM`}
              </p>
            </div>
            <a
              className="ml-3 mt-1 cursor-pointer"
              onClick={(event, id, name) =>
                removeItem(event, item.id, item.title)
              }
            >
              <TrashIcon className="w-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
