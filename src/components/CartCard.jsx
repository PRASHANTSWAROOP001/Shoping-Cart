import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartCard(props) {

  const {
    id,
    product_name,
    brand_name,
    category,
    realPrice, // original price not used
    discountedPrice,
    image_link,
    quantity
  } = props

  const { cartItems, setCartItems } = useContext(CartContext)

  const deleteCart = (id) =>{
    const newCartItems = cartItems.filter((items)=>(items.id != id))
    setCartItems(newCartItems)
  }

  const increaseQuantity = (id) =>{

    const updatedCart = cartItems.map((item)=>{
      if (item.id === id){
        return {
          ...item,
          quantity: item.quantity +1,
        }
      }
      return item;
    })

    setCartItems(updatedCart)

  }

  const decreaseQuantity = (id) =>{

    const updatedCart = cartItems.map((item)=>{

      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity-1 : 1,
        }
      }
      return item
    })

    setCartItems(updatedCart)
  }


  return (
    <div className="w-[90%] h-24 md:h-28  flex flex-row">
      <img
        className=" w-[20%] h-full object-fill"
        src={image_link}
        alt="prodcut imagde"
      />

      <div className="w-[80%] h-full  flex flex-col ">
        <div className="w-full h-[60%] flex flex-row " id="upperdiv">

          <div
            className="pl-2 md:px-4 md:py-2 w-[90%] h-full"
            id="product-info">

            <h1 className="text-lg md:text-xl font-semibold ">{product_name}</h1>
            <h4 className="text-xs md:text-lg text-gray-800">
              {brand_name}|{category}
            </h4>
          </div>

          <div className="h-full w-[10%] " id="deleteIcon">
            <span onClick={()=>(deleteCart(id))} >
              <svg
                className="w-6 h-6 md:my-1 md:ml-3 duration-500 hover:scale-105 cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="w-full h-[40%]  flex items-center justify-between" id="lowerdiv">
          <div>
            <h1 className='text-xl font-semibold pl-2 md:pl-4 md:py-2'>{discountedPrice}</h1>
          </div>

          <div className ='mr-2 flex items-center border border-gray-300 gap-3'>

            <button className ='px-2  text-xl font-bold ' onClick={()=>(decreaseQuantity(id))}> - </button>
                {quantity}
            <button className='px-2  rounded-full text-xl font-bold' onClick={()=>(increaseQuantity(id))}> + </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CartCard;
