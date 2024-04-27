import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/productCard"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const cartPage = () => {
    return (
        <>
            <div className="mx-3 my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <Link to='/'>
                                <ArrowBackIosNewIcon />
                            </Link>
                        </div>
                        <div class="col-9">
                            Shopping Cart(5)
                        </div>
                    </div>
                </div>
            </div>
            <ProductCard reducer={'PRODUCT_CART_PAGE'}/>
        </>
    )
}

export default cartPage
