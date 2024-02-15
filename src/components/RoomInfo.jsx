import React from "react";
import { NavBar, Icon, Button } from "antd-mobile";
import {
  HeartOutlined,
  MessageOutlined,
  LeftOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./RoomInfo.css"; // 커스텀 스타일 시트

const RoomInfo = () => {
  return (
    <div className="room-info-page">
      {/* NavBar with transparent background */}
      <NavBar
        mode="light"
        icon={<LeftOutlined />}
        onLeftClick={() => console.log("Back")}
        rightContent={[
          <Icon
            key="1"
            icon={<ShareAltOutlined />}
            onClick={() => console.log("Share")}
          />,
        ]}
        className="transparent-navbar"
      >
        {/* 투명한 배경을 위한 빈 타이틀 */}
      </NavBar>

      {/* Image section */}
      <div className="image-section">
        <img
          src="room_image_url_here"
          alt="Room"
          style={{ width: "100%", height: "50vh", objectFit: "cover" }}
        />
      </div>

      {/* Room details */}
      <div className="room-details">
        <h2>방 제목</h2>
        <p>
          <strong>위치:</strong> 서울시 강남구
        </p>
        <p>
          <strong>노선:</strong> 2호선
        </p>
        <p>
          이 방은 서울시 강남구에 위치해 있으며, 2호선 근처입니다. 편리한 교통과
          아름다운 주변 환경을 자랑합니다.
        </p>
      </div>

      {/* Action buttons */}
      <div className="action-buttons">
        <Button icon={<HeartOutlined />} inline size="large">
          좋아요
        </Button>
        <Button icon={<MessageOutlined />} inline size="large">
          메시지 보내기
        </Button>
      </div>
    </div>
  );
};

export default RoomInfo;
