import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cardActions";
import { cartItems } from "../initialValues/cardItems";

const initialState = {
        cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
        switch (type) {
                case ADD_TO_CART:
                        let product = state.cartItems.find(c => c.product.id === payload.id)
                        if (product) {
                                product.quantity++;
                                return {
                                        ...state  //içerisindeki elemanları ayırarak yeniden oluşturuyor. new lemek gibi 
                                }
                        } else {
                                return {
                                        ...state,
                                        cartItems: [...state.cartItems, { quantity: 1, product: payload }]  //üzerine yazdık diziye bir eleman eklemiş gibi olduk
                                }
                        }

                case REMOVE_FROM_CART:
                        return {
                                ...state,
                                cartItems: state.cartItems.filter(c => c.produc.id !== payload.id) //filtwe yeni bir arrat oluştururç
                        }

                default:
                        return state;
        }
}