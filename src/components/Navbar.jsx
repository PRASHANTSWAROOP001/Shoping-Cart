import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import Cart from "./Cart"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false)

  const { cartItems } = useContext(CartContext);

  const toggle = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  return (
    <div>
      <nav className="w-full h-14 sticky border-t-2 items-center flex ietms-center justify-around shadow-lg">
        <div className=" w-1/5 -full flex  justify-center">
          <span className="text-xl text-orange-400"> Shop X</span>
        </div>

        <div className="w-1/2  lg:w-3/5 h-full  flex items-center ">
          <ul className=" w-full hidden lg:flex lg:flex-row lg:justify-around">
            <li>
              {' '}
              <a href="#" className=" text-lg">
                Home
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="#" className="text-lg">
                Products
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="#" className="text-lg">
                Orders
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="#" className="text-lg">
                Profile
              </a>{' '}
            </li>
          </ul>
        </div>

        <div className=" w[30%] lg:w-1/5 h-full flex items-center gap-5 px-4">
          <div className='relative'>
            <span className=" text-3xl cursor-pointer " onClick={()=>(setCartOpen((prev)=>(!prev)))} > 🛒 </span>
            {cartOpen ? (<Cart setCartOpen = {setCartOpen} className='w-full h-screen'/>): ""}

            {cartItems.length > 0 ? (
              <span className="absolute text-xl bottom-3 rounded-xl left-10 ">
                {' '}
                {cartItems.length}
              </span>
            ) : (
              ''
            )}

          </div>

          {!showMenu ? (
            <span
              className="w-8 h-8 py-1  lg:hidden cursor-pointer"
              onClick={toggle}
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                  ></path>{' '}
                </g>
              </svg>
            </span>
          ) : (
            <span
              className="w-6 h-6 lg:hidden text-black cursor-pointer"
              onClick={toggle}
            >
              {' '}
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 220.496 220.496"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g>
                    {' '}
                    <g>
                      {' '}
                      <path d="M0.003,192.658c0,7.434,2.897,14.424,8.154,19.684c5.257,5.261,12.25,8.154,19.684,8.154 c7.44,0,14.429-2.894,19.674-8.154l62.732-62.731l62.717,62.72c5.255,5.26,12.244,8.154,19.684,8.154 c7.44,0,14.436-2.895,19.678-8.154c5.255-5.26,8.155-12.25,8.155-19.684s-2.9-14.424-8.155-19.684l-62.714-62.717l62.727-62.727 c5.254-5.257,8.154-12.247,8.154-19.681c0-7.434-2.9-14.427-8.154-19.684C207.084,2.897,200.095,0,192.655,0 c-7.435,0-14.424,2.897-19.678,8.155l-62.724,62.732L47.522,8.155C42.271,2.897,35.281,0,27.847,0 c-7.44,0-14.433,2.897-19.684,8.155c-5.257,5.257-8.155,12.25-8.155,19.684c0,7.434,2.897,14.423,8.155,19.681l62.732,62.727 L8.157,172.974C2.9,178.234,0.003,185.224,0.003,192.658z M16.858,181.681l67.08-67.086c1.156-1.152,1.801-2.714,1.801-4.344 c0-1.631-0.646-3.198-1.801-4.348l-67.08-67.08c-2.939-2.936-4.552-6.836-4.552-10.985c0-4.152,1.618-8.056,4.552-10.989 c2.939-2.933,6.831-4.552,10.989-4.552c4.149,0,8.055,1.619,10.98,4.552l67.079,67.077c2.306,2.306,6.39,2.306,8.695,0 l67.07-67.077c5.867-5.873,16.104-5.861,21.972,0c2.937,2.939,4.552,6.836,4.552,10.989c0,4.149-1.615,8.056-4.552,10.985 l-67.073,67.074c-2.402,2.404-2.402,6.29,0,8.697l67.062,67.056c2.936,2.937,4.545,6.84,4.545,10.989s-1.609,8.053-4.551,10.988 c-5.85,5.867-16.094,5.873-21.966,0l-67.059-67.056c-2.405-2.407-6.29-2.407-8.695,0l-67.085,67.08 c-5.846,5.866-16.09,5.872-21.962,0c-2.939-2.937-4.552-6.84-4.552-10.989C12.307,188.515,13.919,184.612,16.858,181.681z"></path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>{' '}
            </span>
          )}
        </div>
      </nav>

      {showMenu && (
        <div className="lg:hidden fixed top-14 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <a href="#" className="text-lg">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-lg">
                Products
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-lg">
                Orders
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-lg">
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
