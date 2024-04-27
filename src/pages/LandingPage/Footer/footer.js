import './footer.css'
import Home from '../../../Assets/home.svg'
import Categories from '../../../Assets/Category.svg'
import Favourite from '../../../Assets/Heart.png'
import More from '../../../Assets/more_vertical.png'
import Home1 from '../../../Assets/Subtract.png'

const Footer = () => {
    return (
        <div className="container footer-container">
        <div className="row my-2">
            <div className="col">
                <img src={Home1} alt='home'/>
                <p>Home</p>
            </div>
            <div className="col">
                <img src={Categories} alt='category' />
                <p>Categories</p>
            </div>
            <div className="col">
                <img src={Favourite} alt='favourite' />
                <p>Favourite</p>
            </div>
            <div className="col">
                <img src={More} alt='more' />
                <p>More</p>
            </div>
        </div>
        </div>
    )
}

export default Footer