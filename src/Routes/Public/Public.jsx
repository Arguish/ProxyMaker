import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default Public;
