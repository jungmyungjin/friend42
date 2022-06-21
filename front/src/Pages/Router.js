import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
