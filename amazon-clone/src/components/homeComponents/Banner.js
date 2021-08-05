import banner from '../../images/amazon_banner.jpg'
function Banner(){
  return(
    <div className="home__banner">
    <img className="home__image" src={banner} alt="amazon banner"/>
    </div>
  )
}
export default Banner
