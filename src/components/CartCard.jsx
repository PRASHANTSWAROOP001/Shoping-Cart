import React from 'react';

function CartCard() {
  return (
    <div className="w-[90%] h-24 md:h-28  flex flex-row">
      <img
        className=" w-[20%] h-full object-fill"
        src="https://img.freepik.com/free-vector/realistic-sunscreen-ad-concept_52683-42614.jpg?t=st=1724078555~exp=1724082155~hmac=8cfa14980e3bbc091c81ec221b8e9abfa8c08e896664d7ae0c4e679b4b765d61&w=740"
        alt="prodcut imagde"
      />

      <div className="w-[80%] h-full  flex flex-col ">
        <div className="w-full h-[60%] flex flex-row " id="upperdiv">

          <div
            className="pl-2 md:px-4 md:py-2 w-[90%] h-full"
            id="product-info">

            <h1 className="text-lg md:text-xl font-semibold ">{'Product Name'}</h1>
            <h4 className="text-xs md:text-lg text-gray-800">
              {'Brand Name'}|{'Brand Category'}
            </h4>
          </div>

          <div className="h-full w-[10%] " id="deleteIcon">
            <span >
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
            <h1 className='text-xl font-semibold pl-2 md:pl-4 md:py-2'>{"100₹"}</h1>
          </div>

          <div className ='mr-2 flex items-center border border-gray-300 gap-3'>

            <button className ='px-2  text-xl font-bold '> - </button>
                {"1"}
            <button className='px-2  rounded-full text-xl font-bold'> + </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CartCard;
