const calculateTotalPrice = (cart, discountPercent=0) => {
    let totalPrice = 0;
    cart.forEach(function(item) {
        totalPrice = totalPrice + item.price * item.quantity;
    })
    let discountAmount = totalPrice * discountPercent / 100;
    let discountedPrice = totalPrice - discountAmount;
    return { totalPrice, discountAmount, discountedPrice }
}


export default { calculateTotalPrice }
