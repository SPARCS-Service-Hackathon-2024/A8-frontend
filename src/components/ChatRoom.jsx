import { useParams } from 'react-router-dom';

function ChatRoom() {
  const { id } = useParams();

  return (
    <div>
      <h1>채팅방: {id}</h1>
      {/* 채팅 메시지와 입력 필드 구현 */}
    </div>
  );
}

export default ChatRoom;
