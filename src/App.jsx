import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatRoomsProvider } from './components/ChatRoomsProvider';
import ChatRoomList from './components/ChatRoomList';
import ChatRoom from './components/ChatRoom';
import MainPage from './components/MainPage';
import MapPage from "./components/MapPage";
import ChatLayout from './components/ChatLayout';

function App() {
  return (
    <ChatRoomsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/map" element={<MapPage />} />
              {/* <Route path="/chatroomlist" element={<ChatLayout><ChatRoomList /></ChatLayout>} /> */}
              <Route path="/chatroom/:id" element={
              <ChatLayout>
                <ChatRoom />
              </ChatLayout>
              } />
            </Routes>
          </Router>
    </ChatRoomsProvider>
  );
}

export default App;
