import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../Components";
import Details from "../Components/Details";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:name" exact element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
