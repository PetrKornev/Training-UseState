import { useState } from "react";


const ShoppingCart = () => {
    const [cart, setCart] = useState([
        { id: 1, title: "Футболка", count: 1 },
        { id: 2, title: "Кепка", count: 2 },
    ]);

    const plus = () => {
        setCart((oldCart) => oldCart.map((item) => ({ ...item, count: item.count + 1 })))
    }

    const DeleteId = (id) => {
        setCart((oldCart) => oldCart.filter((item) => item.id !== id))
    }

    const deleteAllCart = () => {
        setCart (() => [])
    }
    return <div> 
        <h1>Список покупок</h1>
        {cart.map((item) => (
            <li>№{item.id} Товар: {item.title}, кол-во: {item.count}</li>
        ))}
        <button onClick={plus}>+1</button>
        <button onClick={() => DeleteId(2)}>Удалить</button>
        <button onClick={deleteAllCart}>Очистить корзину</button>
    </div>
}


export default ShoppingCart