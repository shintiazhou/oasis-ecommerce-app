export const addItemToCart = (cartItems, newCartItem) => {
    const selectedCartItems = cartItems.find(cartItem => cartItem.id === newCartItem.id)

    if (selectedCartItems) {
        return cartItems.map(cartItem => cartItem.id === newCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...newCartItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const selectedCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if (selectedCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}