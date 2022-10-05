import { configureStore } from '@reduxjs/toolkit'
import  products  from './slices/products.slices'
import purchases from './slices/purchases.slice'
import cart from './slices/cart.slices'
import isLoading from './slices/isLoading.slice'
export default configureStore({
    reducer: {
        products,
        purchases,
        cart,
        isLoading
    }
})

