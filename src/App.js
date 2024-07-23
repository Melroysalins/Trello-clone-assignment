import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import Login from "./components/Login";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="login" element={<LoginModal />} />
            <Route path="SignUp" element={<LoginModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
