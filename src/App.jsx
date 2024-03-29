import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatRoomsProvider } from "./components/ChatRoomsProvider";
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import MatchPage from "./components/MatchPage";
import MapPage from "./components/MapPage";
import Profile from "./components/Profile";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

import { TabBar } from "antd-mobile";
import {
  HomeOutlined,
  UnorderedListOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LocationFill } from "antd-mobile-icons";

const Bottom = () => {
  const tabs = [
    { key: "/", title: "홈", icon: <HomeOutlined /> },
    { key: "/main", title: "방 목록", icon: <UnorderedListOutlined /> },
    { key: "/map", title: "지도", icon: <LocationFill /> },
    { key: "/chatroomlist", title: "채팅", icon: <MessageOutlined /> },
    { key: "/profile", title: "프로필", icon: <UserOutlined /> },
  ];

  const location = useLocation();
  const { pathname } = location;
  const navigateTo = useNavigate();
  const setRouteActive = (value) => {
    navigateTo(value);
  };

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

function App() {
  return (
    <ChatRoomsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chatroomlist" element={<ChatRoomList />} />
          <Route path="/chatroom/:id" element={<ChatRoom />} />
          <Route path="/match/:id" element={<MatchPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <div className="bottom-container">
          <Bottom />
        </div>
      </Router>
    </ChatRoomsProvider>
  );
}

export default App;
