import * as React from 'react';

const CartContext = React.createContext([]);

export const CartProvider = ({children }) => {
    return <CartContext.Provider>{children}</CartContext.Provider>
};

// Custom Hook
export const useCart = () => {
    const context = React.useContext(CartContext);

    if (!context) {
        throw new Error('El hook debe ser usando dentro de su contexto');
    }

    return context;
};

export default CartContext;
