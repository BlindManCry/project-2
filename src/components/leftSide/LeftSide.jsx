import "./leftside.css";
import perfume from "/images/image-product-desktop.jpg";
import perfumeMobile from "/images/image-product-mobile.jpg";

function LeftSide() {
  return (
    <div className="left-side">
      <img src={perfume} alt="perfume" className="perfume-img-desktop" />
      <img
        src={perfumeMobile}
        alt="perfume-mbl"
        className="perfume-img-mobile"
      />
    </div>
  );
}

export default LeftSide;
