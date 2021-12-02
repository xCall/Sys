import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
