import React from "react";
import Cart from "./Cart";
import Navbar from "./navbar";
import Footer from "./footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 999,
          qty: 0,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getTotalPrice = () => {
    const { products } = this.state;

    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.qty * product.price;
    });
    return totalPrice;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteProduct={this.handleDeleteProduct}
        />
        <Footer totalPrice={this.getTotalPrice()} />
      </div>
    );
  }
}

export default App;
