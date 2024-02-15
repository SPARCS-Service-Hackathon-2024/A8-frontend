import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useChatRooms } from './ChatRoomsProvider'; // Context 사용

let socket;

//더미데이터
const initialMessages = [
  { id: 1, text: "안녕하세요^^", sender: "user1", timestamp: "2024-02-15T09:00:00Z" },
  { id: 2, text: "하이ㅣㅣㅣ", sender: "user2", timestamp: "2024-02-15T09:01:00Z" },
];

function ChatRoom() {
  const { id } = useParams();
  const { updateRoomsWithMessage } = useChatRooms(); // Context에서 함수 추출
  const [currentMessage, setCurrentMessage] = useState('');
  // const [chatMessages, setChatMessages] = useState([]);
  const [messages, setMessages] = useState(initialMessages);// 더미데이터!!!!!!!

  // 실제로는 이 코드
  // useEffect(() => {
  //   socket = io('http://localhost:3000');

  //   socket.on('message', message => {
  //     setChatMessages(prevMessages => [...prevMessages, message]);
  //     updateRoomsWithMessage(id, message); // 메시지를 받을 때마다 채팅방 목록 업데이트
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [id, updateRoomsWithMessage]);

  // 더미용
  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1, // 메시지 ID 자동 생성
        text: currentMessage.trim(),
        sender: "서윤", // 현재 사용자 식별자 (더미
        timestamp: new Date().toISOString(),
      };

      setMessages(messages.concat(newMessage)); // 메시지 목록에 새 메시지 추가
      updateRoomsWithMessage(id, newMessage); // 전역 상태 업데이트
      setCurrentMessage(''); // 입력 필드 초기화
    }
  };

  // 실제로는 이 코드
  // const sendMessage = () => {
  //   if (currentMessage.trim() !== '') {
  //     socket.emit('send message', currentMessage.trim());
  //     setCurrentMessage('');
  //   }
  // };  

  // return (
  //   <div>
  //     <h1>Chat Room: {id}</h1>
  //     {chatMessages.map((message, index) => (
  //       <p key={index}>{message}</p>
  //     ))}
  //     <input
  //       value={currentMessage}
  //       onChange={e => setCurrentMessage(e.target.value)}
  //       type="text"
  //     />
  //     <button onClick={sendMessage}>Send</button>
  //   </div>
  // );

  // 더미용
  return (
    <div>
      <h1>Chat Room: {id}</h1>
      <div>
        {messages.map(message => (
          <p key={message.id}>{message.sender}: {message.text}</p> // 메시지와 발신자 표시
        ))}
      </div>
      <input
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
        type="text"
        placeholder="메시지 입력"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
