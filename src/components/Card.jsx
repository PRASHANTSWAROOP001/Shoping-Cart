import  { React, useContext} from 'react';
import CartContext from "../context/CartContext"

function Card(props) {
  
  const {cartItems,setCartItems} = useContext(CartContext)

  const addToCart = (cartItems,product) =>{
    let cartObj = {
      id: product.id,
      product_name: product.product_name,
      brand_name: product.brand_name,
      category: product.category,
      realPrice: product.realPrice,
      discountedPrice: product.discountedPrice,
      image_link: product.image_link,
      quantity: 1,
    }

    const productExits = cartItems.some((item)=>(item.id === product.id))

    if (!productExits){
      setCartItems((prevItems)=>([...prevItems,cartObj]))
    }
    else{

      const updatedItems = cartItems.map((item)=>{
        if(item.id === product.id){
          return {
            ...item,
            quantity: item.quantity +1,
          }
        }
        else{
          return item;
        }

       
      })

      setCartItems(updatedItems)

    }

  }

  const {
    id,
    brand_name,
    product_name,
    category,
    discountedPrice,
    realPrice,
    image_link,
  } = props;

  return (
    <div>
      <div className="card-container w-72 bg-white rounded-xl shadow-md duration-500 hover:scale-105 hover:shadow-xl">
        <img
          src={image_link}
          alt="product-image"
          className=" w-full h-80 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-500 mr-3 text-xs">{product_name}</span>
          <p className="text-black font-bold text-lg truncate block capitalize mr-3">
            {brand_name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black my-3">
              £{discountedPrice}
            </p>{' '}
            <p className="text-gray-600 ml-2 line-through">£{realPrice}</p>
            <div class="ml-auto cursor-pointer" onClick={()=>(addToCart(cartItems,props))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
