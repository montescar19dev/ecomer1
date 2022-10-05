import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsloading } from './isLoading.slice';

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart:(state,action)=>{
            return action.payload
        }

    }
})

export const { setCart } = cartSlice.actions;

export const getCart = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get(baseUrl+'/cart',getConfig())
        .then(res => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsloading(false)))
        .catch(error => console.log(error.response))
}

export const addToCart = (addCart) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.post(baseUrl+'/cart',addCart,getConfig())
        .then(() => {
            dispatch(getCart());
            alert("Se Añadio un producto")
        })
        .catch(error=>console.log(error.response))
        .finally(() => dispatch(setIsloading(false)));
}

export const purchaseCart = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.post(baseUrl+"/purchases", {}, getConfig())
        .then(() =>{
             dispatch(setCart([]))
             alert("Compra Realizada!")
            })

        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsloading(false)));
}

export const deleteItem = (productId) => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.delete(baseUrl+`/cart/${productId}`,getConfig())
        .then(() => dispatch(getCart()))
        .finally(() => dispatch(setIsloading(false)));
}
export default cartSlice.reducer;
