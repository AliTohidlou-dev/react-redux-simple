import { connect } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruits/fruits.action";

const Fruits = (props) => {
  const {appleCount,orangeCount,buyApple,buyOrange}=props;
  return(
    <div className="cards">
    <div className="card">
      <div><p className="symbol">🍎</p></div>
      <p className="count">count:{appleCount}</p>
      <button onClick={buyApple}>BUY</button>
    </div>
    <div className="card">
      <div><p className="symbol">🍊</p></div>
      <p className="count">count:{orangeCount}</p>
      <button onClick={buyOrange}>BUY</button>
    </div>
    </div>
  )
};
const stateToProps = (state) => {
  return ({
    appleCount: state.apple,
    orangeCount: state.orange,
  });
};
const dispatchToProps = (dispatch) => {
  return({
    buyApple:()=>dispatch(buyApple()),
    buyOrange:()=>dispatch(buyOrange()),
  })
};

export default connect(stateToProps, dispatchToProps)(Fruits);
