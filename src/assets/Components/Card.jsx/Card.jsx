
const Card = ({product, handleAddToCart}) => {
    // console.log(product)
    const {title, description, price, image, category} = product;
    return (
        <div>
            <div className="text-center flex flex-col bg-white w-[300px] px-5 py-7 m-6 items-center rounded-xl space-y-3 h-[480px]">
                <img src={image} className="h-[150px] w-[100] " alt="" />
                <h1 className="product-name text-lg font-bold text-center">{title}</h1>
                <p className="">{description.slice(0,57)}</p>
                <p className="text-[##393f4dAD]">{category}</p>
                <h1 className="font-extrabold">{price} $</h1>
                <button onClick={() => handleAddToCart(product)} className="bg-[#393f4d] text-white font-medium py-2 px-3 rounded-xl  ">Add To Cart</button>
            </div>
        </div>  
    );
};

export default Card;