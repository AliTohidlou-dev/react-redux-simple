import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruits/fruits.action";
import { buyBurger, buyHotdog } from "../redux/foods/foods.action";
import { useState } from "react";

const Fruits = () => {
  const [inputs, setInputs] = useState({
    apple: 1,
    orange: 1,
    burger: 1,
    hotdog: 1,
  });
  const { apple, orange } = useSelector((state) => state.fruits);
  const { burger, hotdog } = useSelector((state) => state.foods);
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <div className="card">
        <div>
          <p className="symbol">🍎</p>
        </div>
        <p className="count">count:{apple}</p>
        <input
          type="number"
          onChange={(e) => setInputs({ ...inputs, apple: e.target.value })}
        />
        <button onClick={() => dispatch(buyApple(inputs.apple))}>BUY</button>
      </div>
      <div className="card">
        <div>
          <p className="symbol">🍊</p>
        </div>
        <p className="count">count:{orange}</p>
        <input
          type="number"
          onChange={(e) => setInputs({ ...inputs, orange: e.target.value })}
        />
        <button onClick={() => dispatch(buyOrange(inputs.orange))}>BUY</button>
      </div>
      <div className="card">
        <div>
          <p className="symbol">🍔</p>
        </div>
        <p className="count">count:{burger}</p>
        <input
          type="number"
          onChange={(e) => setInputs({ ...inputs, burger: e.target.value })}
        />
        <button onClick={() => dispatch(buyBurger(inputs.burger))}>BUY</button>
      </div>
      <div className="card">
        <div>
          <p className="symbol">🌭</p>
        </div>
        <p className="count">count:{hotdog}</p>
        <input
          type="number"
          onChange={(e) => setInputs({ ...inputs, hotdog: e.target.value })}
        />
        <button onClick={() => dispatch(buyHotdog(inputs.hotdog))}>BUY</button>
      </div>
    </div>
  );
};
export default Fruits;
