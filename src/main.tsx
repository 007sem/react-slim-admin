import ReactDOM from "react-dom";
import App from "./App.tsx";
import { AliveScope } from "react-activation";

// 状态管理
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
	<Provider store={store}>
    <AliveScope>
      <App />
    </AliveScope>
	</Provider>,
	document.getElementById("root")!
);
