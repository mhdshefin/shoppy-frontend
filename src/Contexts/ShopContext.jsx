import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext();

const getDefualtCart = () => {
    let Cart = {};

    for (let index = 0; index < 300 + 1; index++) {
        Cart[index] = 0;
    }
    return Cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([])
    const [CartItems, setCartItems] = useState(getDefualtCart())


    useEffect(() => {

        fetch('https://shoppy-backend-pt.onrender.com/allproducts').then((res) => res.json()).then((data) => setAllProduct(data))

        if (localStorage.getItem('auth-token')) {
            fetch('https://shoppy-backend-pt.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((res) => res.json()).then((data) => setCartItems(data))
        }
    }, [])

    const AddToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('https://shoppy-backend-pt.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    }

    const RemoveFromCart = (itemId) => {
        setCartItems((previous) => ({ ...previous, [itemId]: previous[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('https://shoppy-backend-pt.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    }

    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                if (itemInfo) {
<<<<<<< HEAD
                    totalAmount += itemInfo.new_price * CartItems[item]
=======
                    totalAmount += Number(itemInfo.new_price) * CartItems[item]
>>>>>>> 07a6f0ad2eb221bfdcc80caa8bab298dbe20bb73
                }
            }
        }
        return totalAmount;
    }


    const totalCartItem = () => {
        let totalItem = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                totalItem += CartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = { all_product, CartItems, AddToCart, RemoveFromCart, getTotalCartAmount, totalCartItem };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
