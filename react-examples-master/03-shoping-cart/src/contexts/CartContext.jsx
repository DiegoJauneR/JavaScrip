import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }

    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product) => {
      setCart(cart.filter((item) => item.id !== product.id));
  }

  const aumentar = (product)=>{
    const produtid = cart.findIndex((item) => item.id === product.id);
    const aumentr = [...cart];
    aumentr[produtid].quantity +=1
    setCart(aumentr)

  }

  const reducir = (product)=>{
    const produtid = cart.findIndex((item) => item.id === product.id);
    const aumentr = [...cart];
    if(aumentr[produtid].quantity!= 1){
      aumentr[produtid].quantity -=1
      setCart(aumentr)
    }else{
      removeFromCart(product)
    }


    const enumerar = (cart) =>{
      const nuM = cart.product.quantity
    }
  }


  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart,removeFromCart,aumentar,reducir}}>
      {children}
    </CartContext.Provider>
  );
}
