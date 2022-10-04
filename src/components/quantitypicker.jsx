import { useState } from 'react';
import './quantitypicker.css';


const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase =() => {
        let value = quantity + 1;
        setQuantity(value);
    };
    const decrease =() => {

        let value = quantity - 1;
        if (quantity !==1) {
        setQuantity(value);
        }
    };

    return(
        <div className="qt-picker">
            <button onClick={increase}>+</button>
            <label>{quantity}</label>
            <button disabled={quantity ===1} onClick={decrease}>-</button>
            
        </div>
    );
};

export default QuantityPicker;