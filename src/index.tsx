import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";

const App = () => {
  return (
    <AppRouter />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
