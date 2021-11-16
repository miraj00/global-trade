
import { ADD_TO_CART,REMOVE_ITEM,SUBTRACT_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './actions/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract quanity action
export const subtractQuantity=(id)=>{
    return{
        type: SUBTRACT_QUANTITY,
        id
    }
}
//add quanity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
