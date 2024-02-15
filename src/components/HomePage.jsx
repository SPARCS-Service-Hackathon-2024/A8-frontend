// HomePage.jsx
import React from "react";
import { SearchBar, TabBar } from "antd-mobile";
import { Carousel } from "antd";
import {
  EnvironmentOutlined,
  MoreOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./HomePage.css";

const HomePage = () => {
  const carouselItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      name: "모임 이름",
      location: "위치 정보",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      name: "모임 이름",
      location: "위치 정보",
    },
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
          {carouselItems.map((item) => (
            <div className="meetup-item" key={item.id}>
              <img className="item-img" src={item.image} alt={item.name} />
              <div className="div-box">
                <div className="info-section">
                  <h3 className="meetup-name">{item.name}</h3>
                  <div className="location-info">
                    <EnvironmentOutlined /> {item.location}
                  </div>
                </div>
                <div className="icon-section">
                  <MessageOutlined style={{ fontSize: "24px" }} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
