import React from 'react';

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item ">
            {name}{' '}
            <i
                className="material-icons remove basket-btn"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className="material-icons add basket-btn"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity} руб.
            <span
                className="secondary-content"
                onClick={() => removeBasket(id)}
            >
                <i className="material-icons basket-delete icons">close</i>
            </span>
        </li>
    );
};

export default BasketItem;
