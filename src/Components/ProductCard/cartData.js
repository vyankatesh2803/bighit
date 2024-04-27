


const CartData = () => {

}

const addToCart = (id,title) => {
    const updatedCart = {...cart}
    updatedCart[title] ? updatedCart[title]['quantity'] += 1
    :
    updatedCart[title] = {'details': productList[id],
                          'quantity': 1}
    setCart(updatedCart)
}

export default CartData