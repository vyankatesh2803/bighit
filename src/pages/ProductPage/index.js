import { useEffect, useState } from "react"
import ProductCard from "../../Components/ProductCard/productCard"



const ProductPage = () => {
    const queryParameters = window.location.pathname
    const [queryParams, setQueryParams] = useState()
    useEffect (() => {
        setQueryParams(queryParameters)
    },[queryParameters])
    return (
        <>
            {queryParams ? <ProductCard id={queryParams.split('/')[2]-1} reducer={'PRODUCT_CONTENT_PAGE'}/> : <h1>Params dont exist</h1>}
        </>
    )
}

export default ProductPage