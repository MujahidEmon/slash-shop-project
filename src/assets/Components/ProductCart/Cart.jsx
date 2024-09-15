

const Cart = ({product,quantity, handleRemove}) => {
    const {title, id, description, price, image, category} = product;
    return (
        <div className="">
            
          <div id="cart-container" className='flex  justify-between bg-white px-3 mt-3 py-2 rounded-xl font-semibold'>
              <div className=''>
                <h1 className="text-start w-3/4">{title}</h1>
                
                </div>
                <div className="flex flex-col items-center gap-3">
                <p className="font-bold">{price}$</p>
                <button onClick={() => handleRemove(id)} className="bg-[#cdd4e3] text-black justify-between  py-0 px-2 rounded-l">Remove</button>
              </div>
          </div>
        </div>
    );
};

export default Cart;