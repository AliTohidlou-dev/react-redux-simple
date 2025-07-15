import { Provider } from "react-redux";
import Fruits from "./Fruits";
import store from "../redux/store";

const App=()=>{
return(
  <Provider store={store}>
 <Fruits/>
 </Provider>
)
}

export default App;