import { ADD_TO_CART } from "../actions/cardActions";
import { cartItems } from "../initialValues/cardItems";

const initialState = {
        cartItems: cartItems
}

export default function cartReducer(state=initialState, {type,payload}) {
        switch (type) {
                case ADD_TO_CART:
                        let product = state.cartItems.find(c => c.product.id === payload.id)
                        break;
        
                default:
                        break;
        }       
}