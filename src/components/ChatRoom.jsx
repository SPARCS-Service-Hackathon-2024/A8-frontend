import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useChatRooms } from "./ChatRoomsProvider"; // Context 사용
import "./ChatRoom.css";
import { NavBar, Popover } from "antd-mobile";
import { LeftOutline, MoreOutline } from "antd-mobile-icons";
import { SendOutlined, HeartOutlined } from "@ant-design/icons";

// let socket;

// //더미데이터
// const initialMessages = [
//   {
//     id: 1,
//     text: "안녕하세요^^",
//     sender: "유성주민",
//     timestamp: "2024-02-15T09:00:00Z",
//   },
//   {
//     id: 2,
//     text: "하이ㅣㅣㅣ",
//     sender: "유성주민",
//     timestamp: "2024-02-15T09:01:00Z",
//   },
// ];

function ChatRoom() {
  const { room_id, user_id } = useParams();
  const navigateTo = useNavigate();
  // const { updateRoomsWithMessage } = useChatRooms(); // Context에서 함수 추출
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  // const [messages, setMessages] = useState(initialMessages); // 더미데이터!!!!!!!
  // const [chatPartnerNickname, setChatPartnerNickname] = useState("유성주민");

  // 실제로는 이 코드 - 웹소켓으로 바꾸는 중
  useEffect(() => {
    const websocket = new WebSocket(`ws://3.38.57.38:8000/chatroomsocket/${room_id}&${user_id}`);
    
    websocket.onopen = () => {
      console.log('WebSocket Connected');
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    websocket.onclose = () => console.log('WebSocket disconnected');
    websocket.onerror = (error) => console.log('WebSocket Error: ', error);

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [room_id, user_id]);

  // 더미용
  // const sendMessage = () => {
  //   const trimmedMessage = currentMessage.trim();
  //   if (trimmedMessage) {
  //     const newMessage = {
  //       id: messages.length + 1,
  //       text: trimmedMessage,
  //       sender: "나",
  //       timestamp: new Date().toISOString(),
  //     };

  //     setMessages((messages) => messages.concat(newMessage));
  //     updateRoomsWithMessage(id, newMessage);
  //     setCurrentMessage("");
  //   }
  // };

  // 실제로는 이 코드 - 웹소켓으로 바꾸는 중
  const sendMessage = () => {
    const trimmedMessage = currentMessage.trim();
    if (trimmedMessage && ws) {
      const message = { text: trimmedMessage, sender: '나', timestamp: new Date().toISOString() };
      ws.send(JSON.stringify(message)); 
      setCurrentMessage(''); 
    }
  };

  const actions = [{ key: 'match', icon: <HeartOutlined />, text: '매치' }];

  const right = (
    <Popover.Menu
      actions={actions}
      placement="bottom-start"
      onAction={(node) => console.log(`${node.text}`)}
      trigger="click"
    >
      <MoreOutline fontSize={"20px"} />
    </Popover.Menu>
  );

  return (
    <div className="chat-room-container">
      <NavBar
        icon={<LeftOutline />}
        onBack={() => navigateTo("/chatroomlist")}
        right={right}
        style={{ "--height": "50px", "--border-bottom": "1px #eee solid" }}
      >
        Chat Room: {room_id}
      </NavBar>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message-bubble ${message.sender === '나' ? 'outgoing' : 'incoming'}`}>
            <p className="message-text">{message.text}</p>
            <p className="message-sender">{message.sender}</p>
          </div>
        ))}
      </div>

      <div className="message-input-container">
        <input
          className="message-input"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          type="text"
          placeholder="메시지 입력"
        />
        <button className="send-button" onClick={sendMessage} disabled={!currentMessage.trim()}>
          <SendOutlined />
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;

  // 더미용
//   return (
//     // <div>
//     //   <h1>Chat Room: {id}</h1>
//     //   <div>
//     //     {messages.map(message => (
//     //       <p key={message.id}>{message.sender}: {message.text}</p> // 메시지와 발신자 표시
//     //     ))}
//     //   </div>
//     //   <input
//     //     value={currentMessage}
//     //     onChange={e => setCurrentMessage(e.target.value)}
//     //     type="text"
//     //     placeholder="메시지 입력"
//     //   />
//     //   <button onClick={sendMessage}>Send</button>
//     // </div>
//     <div className="chat-room-container">
//       <NavBar
//         icon={<LeftOutline />}
//         onBack={() => navigateTo("/chatroomlist")}
//         right={right}
//         style={{
//           "--height": "50px",
//           "--border-bottom": "1px #eee solid",
//         }}
//       >
//         {chatPartnerNickname} {/* Display chat partner's nickname */}
//       </NavBar>

//       <div className="messages-container">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`message-bubble ${
//               message.sender === "나" ? "outgoing" : "incoming"
//             }`}
//           >
//             <p className="message-text">{message.text}</p>
//             <p className="message-sender">{message.sender}</p>
//           </div>
//         ))}
//       </div>
//       <div className="message-input-container">
//         <input
//           className="message-input"
//           value={currentMessage}
//           onChange={(e) => setCurrentMessage(e.target.value)}
//           type="text"
//           placeholder="메시지 입력"
//         />
//         <button
//           className="send-button"
//           onClick={sendMessage}
//           disabled={!currentMessage.trim()}
//         >
//           <SendOutlined />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatRoom;
