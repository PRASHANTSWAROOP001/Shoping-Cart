import { React, useState, useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import CartCard from './CartCard';

function Cart({ setCartOpen }) {

  const { cartItems} = useContext(CartContext);
  const [cartValue, setCartvalue] = useState(0)

  // useEffect(() => {
  //   const total_price = cartItems.reduce(
  //     (accumulator, items) => (accumulator + items.discountedPrice * items.quantity),
  //     0
  //   );
  
  //   setCartvalue(total_price);
  // }, [cartItems]);


  useEffect (()=>{
    let total_price = cartItems.reduce((accumulator, items) => (accumulator + items.discountedPrice * items.quantity),0);
    setCartvalue(total_price)
  },[cartItems])



  return (
    <div className=" fixed top-0  left-0 w-full h-screen bg-white z-50 flex items-center justify-center ">
      <button
        className="w-10 h-10 border-2  absolute top-2 right-2 bg-red-300 rounded-full hover:bg-red-400 "
        onClick={() => setCartOpen((prev) => !prev)}
      >
        {' '}
        X{' '}
      </button>

      <section className=" w-[90%] md:w-[50%] lg:[40%] min-h-96 max-h-[90%] border-2 flex flex-col  items-center rounded-t-xl shadow-lg ">
        <h1 className="text-xl px-4 py-2 text-left">Your Shopping Cart {cartItems.length > 0 ? "" : " Is Empty :( "}</h1>
        <div className='flex flex-col gap-2 flex-grow overflow-y-auto w-full items-center'>
          
          {cartItems.map((items)=>(
            <CartCard key={items.id} {...items} />
          ))}

        </div>
        

        <div className="flex flex-row items-center justify-around lg:justify-evenly w-full h-16 bg-gray-300 rouded-b-xl ">
          <button className="w-32 lg:w-52 h-12 rounded-xl text-xl border-2 bg-green-400 hover:bg-green-500 text-white">
            Check Out
          </button>

          <div>
            <h1 className="text-xl">
              Total Cart Value is: <span> {cartValue} £ </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
