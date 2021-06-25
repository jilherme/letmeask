import { BrowserRouter, Route } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />{" "}
      {/* exact é um boolean com o valor default={true} e diz pro react-router-dom que o endereço precisa ser exatamente esse, e não começar com "/" */}
      <Route path="/room/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
