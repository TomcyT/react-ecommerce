import Home from "./Routes/Home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import SignIn from "./Routes/Sign-In/Sign-in.component";

const Shop = () => {
  return <div></div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
