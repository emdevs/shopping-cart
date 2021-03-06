import cancelIcon2 from "../imgs/icons8-cancel-50.png"
import cancelIcon from "../imgs/icons8-macos-close-64.png";
import removeIcon from "../imgs/icons8-minus-64.png";

function ShoppingCart(props) {

    const {cart, getItem, bill, close, change, clearCart, set, remove} = props;

    return (
        <div id="shopping-cart">
            <div id="cart-buttons">
                <img id="close-icon" className="icon" onClick={close} src={cancelIcon}/>
                <button onClick={clearCart}>Clear cart</button>
            </div>
            
            {cart.map((item) => {
                let catalogItem = getItem(item.id);

                return (
                    <div className="checkout-item" key={item.id}>
                        <img src={catalogItem.img}/>
                        

                        <div className="item-info">
                            <div>
                                <p>{catalogItem.name}</p>
                                <img className="remove-icon" onClick={() => remove(item.id)} src={removeIcon}/>   
                            </div>

                            <div>
                                <input
                                onChange={e => change(e, item.id)}
                                onBlur={e => set(e, item.id)}
                                type="number"
                                min="1"
                                value={item.qty}
                                />

                                <p>${catalogItem.price}</p>
                            </div>
                        </div>
                    </div>
                    );

            })}

            <div id="bill">
                <div id="subtotal">
                    <p>Subtotal</p>
                    <p>${bill.subtotal}</p>
                </div>
                <div id="shipping">
                    <p>Shipping Cost</p>
                    <p>${bill.shipping}</p>
                </div>
                <div id="tax">
                    <p>Taxes</p>
                    <p>${bill.tax}</p>
                </div>
                <div id="total">
                    <p>Total</p>
                    <p>${bill.total}</p>
                </div>               
            </div>

            <button id="checkout">Checkout</button>
        </div>
    );
};

export default ShoppingCart;