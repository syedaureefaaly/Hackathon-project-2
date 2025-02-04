import { Product } from "../types/product";

//  Add item to cart & ensure new items create new cards
export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        // If product exists, increase quantity instead of inventory
        cart[existingProductIndex].inventory += 1;
    } else {
        // If product is new, add it with quantity = 1
        cart.push({ ...product, inventory: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch event to update UI automatically
    window.dispatchEvent(new Event("cartUpdated"));
};

// Remove item from cart
export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(item => item._id !== productId);
    
    localStorage.setItem("cart", JSON.stringify(cart));

    //  Dispatch event to notify UI
    window.dispatchEvent(new Event("cartUpdated"));
};

//  Update quantity in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = Math.max(1, quantity); // Prevent negative quantities
        localStorage.setItem("cart", JSON.stringify(cart));

        // Dispatch event to update UI
        window.dispatchEvent(new Event("cartUpdated"));
    }
};

//  Get cart items & ensure UI listens for changes
export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
};
