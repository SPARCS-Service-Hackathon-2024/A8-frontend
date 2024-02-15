import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import MapPage from "./components/MapPage";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
