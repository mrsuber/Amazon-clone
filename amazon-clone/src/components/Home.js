import "../css/Home.css";
import Banner from './homeComponents/Banner'
import HomeDisplayRow from './homeComponents/HomeDisplayRow'
function Home(){
  return (
    <div className="home">
    <div className="home__container">

    <Banner />
    <HomeDisplayRow />
    </div>
    </div>
  )
}

export default Home
