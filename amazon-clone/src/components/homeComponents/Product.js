import '../../css/Products.css'
// import product1 from '../../images/product1.jpg'
function Product({id,title,image,price,rating}){
  return(
    <div className= "product">

        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i)=>(
                  <p>&#11088;</p>
                ))}

            </div>
        </div>

        <img src={image} alt="watch"/>
        <button>Add to Basket</button>
    </div>
  )
}
export default Product
