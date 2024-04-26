import LeftSide from "../leftSide/LeftSide";
import RightSide from "../rightSide/RightSide";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Card;
