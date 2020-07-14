import { v4 as uuidv4 } from 'uuid';

/* Action types */
export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_CART: "UPDATE_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

/* Action Creators */ 
export function addToCart(item, quantity) {
    return {
        type: actions.ADD_TO_CART,
        payload: { id: uuidv4(), quantity: quantity, details: item}
    }
}

export function updateCart(item, quantity) {
    return {
        type: actions.UPDATE_CART,
        payload: {item: item, quantity: quantity}
    }
}

export function removeFromCart(item) {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: item
    }
}

// export const actions = {
//     GET_ITEMS: "GET_ITEMS",
//     ADD_TO_CART: "ADD_TO_CART",
//     UPDATE_CART: "UPDATE_CART",
//     REMOVE_FROM_CART: "REMOVE_FROM_CART",
//     SAVE_CART: "SAVE_CART"
//   };
// const uid = () => Math.random().toString(34).slice(2);
// export const addToCart = (item, quantity) => {
// return {
//  type: actions.ADD_TO_CART,
//  payload: { id: uid(), quantity: quantity, details: item }
// };
// }
// export const updateCart = (item, quantity) => {
// return{ 
// type: actions.UPDATE_CART,
// payload: {item: item, quantity: quantity}
// }
// }
// export const removeFromCart = item => {
// return {
// type: actions.REMOVE_FROM_CART,
// payload: item
// };
// };
// export const saveCart = (items) => {
// return{ 
// type: actions.SAVE_CART,
// payload: {items: items}
// }
// }