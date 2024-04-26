import "./rightside.css";
import cart from "/images/icon-cart.svg";

function RightSide() {
  return (
    <div className="right-side">
      <p className="title">PERFUME</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <h3>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </h3>
      <div className="prices">
        <p className="new-price">$149.99</p>
        <p className="old-price">$169.99</p>
      </div>
      <button>
        <img src={cart} alt="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default RightSide;
