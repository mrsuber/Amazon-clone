import Product from './Product'
import product1 from '../../images/product1.jpg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
import product4 from '../../images/product4.jpg'
import product5 from '../../images/product5.jpg'
import product6 from '../../images/product6.jpg'
function HomeDisplayRow(){
  return(
    <>
    <div className="home__row">
    <Product id={1} title ="The lean startup" price={26.99} image={product1} rating={5}/>
    <Product id={2} title ="The lean startup2" price={26.99} image={product2} rating={4}/>

    </div>

    <div className="home__row">
    <Product id={3} title ="The lean startup" price={26.99} image={product3} rating={3}/>
    <Product id={4} title ="The lean startup" price={26.99} image={product4} rating={2}/>
    <Product id={5} title ="The lean startup" price={26.99} image={product5} rating={4}/>
    </div>

    <div className="home__row">
    <Product id={6} title ="The lean startup" price={26.99} image={product6} rating={5}/>
    </div>

    <div className="home__row">
    </div>

    </>
  )
}

export default HomeDisplayRow
