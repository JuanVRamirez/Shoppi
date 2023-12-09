import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function ProductDetail() {
  const { isProductDetailOpen, toggleProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-[4px] border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-100px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black font-bold cursor-pointer"
            onClick={() => toggleProductDetail()}
          />
        </div>
      </div>
      <figure className=" px-6">
        <img
          className=" w-full h-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className=" font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className=" font-medium text-md mb-2">{productToShow.title}</span>
        <span className=" font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}
