// HomePage.jsx
import React from "react";
import { SearchBar, TabBar } from "antd-mobile";
import { Carousel } from "antd";
import {
  EnvironmentOutlined,
  MoreOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./HomePage.css";

const HomePage = () => {
  const tabs = [
    { key: "home", title: "홈", icon: <HomeOutlined /> },
    { key: "list", title: "방 목록", icon: <UnorderedListOutlined /> },
    { key: "chat", title: "채팅", icon: <MessageOutlined /> },
    { key: "profile", title: "프로필", icon: <UserOutlined /> },
  ];

  return (
    <div className="home-page">
      <div className="search-filter-section">
        <SearchBar placeholder="검색" />
        <button className="filter-button">
          <MoreOutlined />
        </button>
      </div>
      <div className="nearby-meetup-section">
        <h2>근처 모임</h2>
        <Carousel autoplay={false} infinite>
          <div className="meetup-item">
            <h3>모임 이름</h3>
            <p>
              <EnvironmentOutlined /> 위치 정보
            </p>
          </div>
          {/* 추가 모임 아이템 */}
        </Carousel>
      </div>
      <TabBar>
        {tabs.map((tab) => (
          <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default HomePage;
