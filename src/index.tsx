import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter";
import { AppHeader } from "./tools/ui_components/AppHeader/AppHeader";

const App = () => {
  return (
    <>
      <AppHeader />
      <AppRouter />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
