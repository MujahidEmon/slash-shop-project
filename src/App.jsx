import { useEffect } from 'react'
import './App.css'

import { useState } from 'react'
import Card from './assets/Components/Card.jsx/Card.jsx'
import Cart from './assets/Components/ProductCart/Cart.jsx'

function App() {
  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  useEffect(() =>{
    fetch("./cartData.json")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

  const handleAddToCart = item =>{
    const isExist = cart.find(p => p.id == item.id)
    // console.log(isExist)
    if(!isExist){
      setCart([...cart,item])
     
    }
    else{
       alert(`Already added ${item.title}`)
     
    }
    const newPrice = price + item.price;
    const intPrice = parseInt(newPrice)
    setPrice(intPrice)
    console.log(price)
  }


  const handleRemove = id =>{
    const newCart = cart.filter(item => item.id != id);
    setCart(newCart)
  }
  // console.log(cart)
  return (
    <>
      <h1 className='lg:text-4xl text-3xl text-center font-extrabold my-6'>Slash Shopping Center</h1>
      <div className="main-container lg:flex-row flex-col-reverse flex justify-around mx-10 lg:px-5 lg:gap-0 gap-4">
        <div className="lg:w-3/4 lg:rounded-l-xl  bg-[#393f4d] max-h-fit">
          <h1 className='text-center text-white font-bold lg:text-3xl text-2xl mt-5'>Our Products</h1>
          <div className='card-container grid lg:grid-cols-3 grid-cols-1'>
            {
              products.map((product, idx) => <Card key = {idx} 
              product = {product}
              handleAddToCart = {handleAddToCart} 
              ></Card>)
            }
          </div>
        </div>
        <div className="cart-container lg:w-1/4 bg-[#ffdc6a] max-h-fit px-5 rounded-r-xl  ">
          <h1 className='text-center font-bold lg:text-3xl text-2xl lg:mt-5 '>Cart Items</h1>
          <hr />
          <div className='flex justify-between'>
              <h1 className='font-bold text-xl'>Products</h1>
              <h1 className='font-bold text-xl'>Total Price: {price}</h1>
          </div>
          {
            cart.map((product, idx) => <Cart key={idx} product={product}
            
            Price = {price}
            handleRemove = {handleRemove}
            ></Cart>)
          }
        </div>
      </div>
      
    </>
  )
}

export default App
