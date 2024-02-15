import './RoomButton.css'; // 스타일 시트 임포트

// 방 버튼 컴포넌트 정의
const RoomButton = ({ roomName, date, route, onClick }) => {
  return (
    <div className="room-button" onClick={onClick}>
      <div className="room-info">
        <h3 className="room-name">{roomName}</h3>
        <p className="room-date">{date.toLocaleString("ko-kr", {
          dateStyle: "short", timeStyle: "short"
        })}</p>
      </div>
      <div className="room-route">{route}</div>
    </div>
  );
};

export default RoomButton;
