import React, { useState } from "react"
import { Context } from './../pages/HomePage';

export const ContextCart = React.createContext();
export const CartContext = ({children})=>{
    const [items, setItems] = useState(0)
    return (
        <Context.Provider value={{items, setItems}}>
            {children}
        </Context.Provider>
    )
}