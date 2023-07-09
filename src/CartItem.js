import React from "react";

const CartItem = (props) => {
  const { title, price, qty, img } = props.product;
  const { product, increaseQuantity, decreaseQuantity, deleteProduct } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/*  Buttons */}
          <img
            alt="increase"
            src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
            className="action-icons"
            onClick={() => increaseQuantity(product)}
          />
          <img
            alt="decrease"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            className="action-icons"
            onClick={() => decreaseQuantity(product)}
          />
          <img
            alt="delete"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            className="action-icons"
            onClick={() => deleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
