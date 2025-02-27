import { useState } from "react";
const ShoppingCart = () => {
    const [items, setItems] = useState([
        {id: 1, name: "Shirt", price: 699},
        {id: 2, name: "T-Shirt", price: 399},
        {id: 3, name: "Jeans", price: 899},
        {id: 4, name: "Kurti", price: 499},
    ]);

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: "Saree",
            price: 1999
        };

        setItems([...items, newItem]);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return(
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Items: {items.length}</p>
            <p>Total Price: {totalPrice}</p>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ₹{item.price} 
                        <button onClick={() => removeItem(item.id)} className="ml-4">Remove</button>
                    </li>
                ))};
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default ShoppingCart;