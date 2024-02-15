import React from 'react';
import Sidebar from './Sidebar';

const ChatLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default ChatLayout;
