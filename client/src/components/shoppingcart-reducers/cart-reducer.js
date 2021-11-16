import { ADD_TO_CART,REMOVE_ITEM,SUBTRACT_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './actions/cart-actions'
 
 const cartReducer = () => {
      //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
 }
 if(action.type === REMOVE_ITEM){
 }








 //calculating the total for adding -still working on it
  let newTotal = state.total + addedItem.price 
            
  return{
      ...state,
      addedItems: [...state.addedItems, addedItem],
      total : newTotal
  }

export default cartReducer