
import './styles/App.css';

import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppRouter from "./router/AppRouter";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <AppRouter/>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
