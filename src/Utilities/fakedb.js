
const addToDb = id => {

    let productsCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        productsCart = JSON.parse(storedCart);
    }

    const quantity = productsCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        productsCart[id] = newQuantity;
    }
    else {
        productsCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(productsCart));
}

const getStoredCart = () => {
    let productsCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        productsCart = JSON.parse(storedCart);
    }
    return productsCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const productsCart = JSON.parse(storedCart);
        if (id in productsCart) {
            delete productsCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(productsCart));
        }
    }
}


export {
    addToDb,
    getStoredCart,
    removeFromDb,
}