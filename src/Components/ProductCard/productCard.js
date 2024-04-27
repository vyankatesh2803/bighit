import { useEffect, useState } from "react"
import PlusIcon from '../../Assets/plus-outline (3) 1.svg'
import Bag from '../../Assets/bag.svg'

import * as React from 'react';
import Rating from '@mui/material/Rating';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";


const ProductCard = ({id,reducer}) => {
    const [productList, setProductList] = useState(null)
    const [cart, setCart] = useState({})
    /*
        {
            iphone : {
                details: {},
                quantity: 5
            }
        }
    */
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProductList(data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
    }, [])
    // console.log(reducer)
    // console.log(productList)
    // console.log(id)

    useEffect(() => {
        console.log('cart after done updating', cart)
    },[cart])

    const addToCart = (id,title) => {
        const updatedCart = {...cart}
        updatedCart[title] ? updatedCart[title]['quantity'] += 1
        :
        updatedCart[title] = {'details': productList[id],
                              'quantity': 1}
        setCart(updatedCart)
    }

    switch (reducer) {
        case 'PRODUCT_LANDING_PAGE' :
                return productList  ? 
                <>
                        <div className="container" style={{marginBottom:'68px'}}>
                            <div className="row">
                            {productList.map((product,i) => (
                                <div className="col-6 product-container" key={product.id}>
                                        <Link to={`/products/${i+1}`} style={{color:'inherit',textDecoration:'none'}}>
                                        <div className="product-details">
                                            <img src={product.thumbnail} alt="product" style={{width:'100%', height:'15rem', objectFit:'contain'}} />
                                            <div className="d-flex justify-content-between mx-3">
                                                <p className="mb-0">${product.price}</p>
                                                <img className="plus-icon" src={PlusIcon} alt="plus icon"/>
                                            </div>
                                            <p className="mx-3">{product.title}</p>
                                        </div>
                                        </Link>
                                    </div>
                            ))}
                            </div>
                        </div>
                </> : <p>Loading</p>
        case 'PRODUCT_CONTENT_PAGE' :
            return productList && id<productList.length && id >= 0 ?
            <div className="mx-4">
                <div className="d-flex justify-content-between my-4">
                    <Link to='/' style={{color:"black"}}><ArrowBackIosNewIcon /></Link>
                    <Link to='/cart'><img src={Bag} alt="shopping" style={{filter:'invert(100%',height:'24px', width:'24px'}}/></Link>
                </div>
                <h1>
                    {productList[id].title}
                </h1>
                <div className="d-flex">
                    <Rating name="read-only" value={productList[id].rating} readOnly />
                    <div style={{color:'#A1A1AB'}} className="ms-2 mb-4">110 reviews</div>
                </div>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {productList[id].images.map((source) => {
                        return (
                            <SwiperSlide>
                                <img src={source} alt="product page" style={{height:'15rem',width:'100%', objectFit:'cover'}}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="d-flex flex-row align-items-center my-3">
                    <div className="me-2" style={{color:'#2A4BA0'}}><strong>$ {productList[id].price}</strong></div>
                    <div style={{border:'1px solid #2A4BA0', backgroundColor:'#2A4BA0', color:'#FAFBFD', borderRadius:'70px', padding:'4px 10px 4px 10px'}}>$ {productList[id].discountPercentage} OFF</div>
                </div>
                <div className="d-flex justify-content-around my-4">
                    <button style={{border:'1px solid #2A4BA0', color:'#2A4BA0', borderRadius:'20px', width:'8rem', padding:'10px'}} onClick={() => addToCart(id,productList[id].title)}>Add to cart</button>
                    <button style={{border:'1px solid #2A4BA0', color:'#FFFFFF', borderRadius:'20px',width:'8rem',padding:'10px', backgroundColor:'#2A4BA0'}}>Buy Now</button>
                </div>
                <div>
                    <p style={{color:'#1E222B'}}>Details</p>
                    <p style={{color:'#8891A5'}}>{productList[id].description}</p>
                </div>
            </div> : <p>Loading</p>
        case 'PRODUCT_CART_PAGE' :
            return productList ? 
            1234 ?
            <>
                {console.log(Object.keys(cart))}
                <div className="mx-3 my-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <img src={productList[0].thumbnail} alt="small" style={{height:'3rem', width:'100%', objectFit:'contain'}}/>
                            </div>
                            <div class="col-5">
                                <div className="d-flex flex-column">
                                    <div>
                                        {productList[0].title}
                                    </div>
                                    <div>
                                        ${productList[0].price}
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex flex-row justify-content-between align-items-center h-100">
                                    <button style={{border:'none', background:'none'}}><strong>-</strong></button>
                                    <button style={{border:'none', background:'none'}}><strong>1</strong></button>
                                    <button style={{border:'none', background:'none'}}><strong>+</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                : 
                <p className="mx-4 py-4">
                    {console.log(Object.keys(cart))}
                    Cart is empty. Add some products and they will be displayed here
                </p>
            : <p>Loading</p>
        default :
            return <>
                <h1>Reducer Invalid</h1>
            </>
    }
}

export default ProductCard



// return (
//     <>
//         {/* {productList.length > 0 ? (
//             <div className="container" style={{marginBottom:'68px'}}>
//                 <div className="row">
//                 {productList.map((product) => (
//                     <div className="col-6 product-container" key={product.id}>
//                         <div className="product-details">
//                             <img src={product.thumbnail} alt="product" style={{width:'100%', height:'15rem', objectFit:'contain'}} />
//                             <div className="d-flex justify-content-between mx-3">
//                                 <p className="mb-0">${product.price}</p>
//                                 <img className="plus-icon" src={PlusIcon} alt="plus icon"/>
//                             </div>
//                             <p className="mx-3">{product.title}</p>
//                         </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//         ) : (
//             <p>Loading products...</p>
//         )} */}
//     </>
// )