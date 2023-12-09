import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
  const {
    count,
    setCount,
    toggleProductDetail,
    isProductDetailOpen,
    setProductToShow,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    toggleProductDetail();
    setProductToShow(productDetail);
  };

  return (
    <div
      className=" bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct(data)}
    >
      <figure className=" relative mb-2 w-full h-4/5">
        <span className=" absolute bottom-0 left-0 bg-slate-400 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className=" w-full h-full object-contain rounded-lg"
          src={data.image}
          alt={data.title}
        />
        <button
          onClick={(e) => {
            setCount(count + 1);
            e.stopPropagation();
          }}
          className=" absolute top-0 right-0 flex justify-center items-center bg-slate-400 w-6 h-6 rounded-full m-2 p-1"
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      </figure>
      <p className=" flex justify-between">
        <span className=" text-sm font-light truncate">{data.title}</span>
        <span className=" text-lg font-bold">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
