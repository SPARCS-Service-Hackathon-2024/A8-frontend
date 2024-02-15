// HomePage.jsx
import React from "react";
import { SearchBar, TabBar, List } from "antd-mobile";
import { Carousel } from "antd";
import {
  EnvironmentOutlined,
  CoffeeOutlined,
  CameraOutlined,
  MoreOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./HomePage.css";

const HomePage = () => {
  const carouselItems = [
    {
      id: 1,
      image:
        "https://github.com/SPARCS-Service-Hackathon-2024/A8-frontend/assets/87213416/08164329-b9db-4163-b398-9a010ed44208",
      name: "퇴근 후 커피",
      location: "대전광역시 유성구",
    },
    {
      id: 2,
      image:
        "https://github.com/SPARCS-Service-Hackathon-2024/A8-frontend/assets/87213416/82f63892-1cfe-46ec-9be9-1e4a0f320aa4",
      name: "산책",
      location: "대전광역시 서구",
    },
  ];

  const categories = [
    { title: "여행", count: 12, icon: <EnvironmentOutlined /> },
    { title: "카페 투어", count: 5, icon: <CoffeeOutlined /> },
    { title: "사진 촬영", count: 8, icon: <CameraOutlined /> },
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
        <Carousel autoplay infinite>
          {carouselItems.map((item) => (
            <div className="meetup-item" key={item.id}>
              <img
                className="item-img"
                src={item.image}
                alt={item.name}
                width="300px"
                height="300px"
              />
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

      <List header="카테고리">
        {categories.map((category, index) => (
          <List.Item
            key={index}
            prefix={category.icon}
            description={`모임 수: ${category.count}`}
          >
            {category.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default HomePage;
