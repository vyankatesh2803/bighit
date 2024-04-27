import ProductCard from "../../../Components/ProductCard/productCard"


import './productContainer.css'


const ProductContainer = () => {

    return (
        <>
            <h3>Recommended</h3>
            <ProductCard id={'hello world'} reducer={'PRODUCT_LANDING_PAGE'} />
        </>
    )
}

export default ProductContainer