import { useEffect, useRef, useState } from "react";
import { NavBar, FloatingPanel } from "antd-mobile";
import "./MatchPage.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const MatchPage = () => {
  const navigate = useNavigate();

  // 예시 데이터
  const busStops = [
    {
      route_id: 30300001,
      name: 42740,
      latitude: 36.365704,
      longtitude: 127.352036,
    },
    {
      route_id: 30300001,
      name: 42720,
      latitude: 36.36286,
      longtitude: 127.353004,
    },
    {
      route_id: 30300001,
      name: 42710,
      latitude: 36.36042,
      longtitude: 127.35253,
    },
    {
      route_id: 30300001,
      name: 42700,
      latitude: 36.360806,
      longtitude: 127.34954,
    },
    {
      route_id: 30300001,
      name: 42600,
      latitude: 36.36156,
      longtitude: 127.34412,
    },
    {
      route_id: 30300001,
      name: 41350,
      latitude: 36.357758,
      longtitude: 127.3426,
    },
    {
      route_id: 30300001,
      name: 41320,
      latitude: 36.35488,
      longtitude: 127.34153,
    },
    {
      route_id: 30300001,
      name: 41290,
      latitude: 36.35433,
      longtitude: 127.33983,
    },
    {
      route_id: 30300001,
      name: 41200,
      latitude: 36.35589,
      longtitude: 127.336685,
    },
  ];

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("match-map");
      const options = {
        center: new window.kakao.maps.LatLng(36.36156, 127.34412), // 지도의 중심좌표
        level: 6, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(container, options);

      // 버스 정류장 마커
      const busStopMarkers = busStops.map((busStop, i) => {
        const markerPosition = new window.kakao.maps.LatLng(
          busStop.latitude,
          busStop.longtitude
        );

        if (i === Math.floor(busStops.length / 2)) {
          const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
          const imageSize = new window.kakao.maps.Size(24, 35);
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });
          marker.setMap(map);
          return marker;
        } else {
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
          return marker;
        }
      });

      // 버스 노선
      const busPath = busStops.map((busStop) => {
        return new window.kakao.maps.LatLng(
          busStop.latitude,
          busStop.longtitude
        );
      });
      const polyline = new window.kakao.maps.Polyline({
        path: busPath,
        strokeWeight: 4,
        strokeColor: "#FFAE00",
        strokeOpacity: 1,
        strokeStyle: "longdash",
      });
      polyline.setMap(map);

      // 내 위치 마커
      const markerPosition = new window.kakao.maps.LatLng(36.3665, 127.3525);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      const content =
        '<div style="padding:5px;"><img src="https://picsum.photos/500/500?img=me" alt="프로필" style="width: 50px; height: 50px; border-radius: 50%;" /></div>';
      const customOverlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: markerPosition,
        content: content,
        yAnchor: 1,
      });

      // 상대 위치 마커
      // 36.3587, 127.3364
      const markerPosition2 = new window.kakao.maps.LatLng(36.3587, 127.3364);
      const marker2 = new window.kakao.maps.Marker({
        position: markerPosition2,
      });
      marker2.setMap(map);

      const content2 =
        '<div style="padding:5px;"><img src="https://picsum.photos/500/500?img=user" alt="프로필" style="width: 50px; height: 50px; border-radius: 50%;" /></div>';
      const customOverlay2 = new window.kakao.maps.CustomOverlay({
        map: map,
        position: markerPosition2,
        content: content2,
        yAnchor: 1,
      });
    });
  }, []);

  const ref = useRef(null);
  const anchors = [170, window.innerHeight * 0.5, window.innerHeight * 0.8];

  return (
    <div className="match-page" style={{ height: "100vh" }}>
      <NavBar
        onBack={() => navigate(-1)}
        style={{
          "--height": "50px",
          "--border-bottom": "1px solid #ccc",
        }}
      >
        장소 확인
      </NavBar>

      <div id="match-map">test</div>

      <FloatingPanel
        id="match-panel"
        anchors={anchors}
        ref={ref}
        style={{ "--z-index": 50, marginBottom: "60px" }}
      >
        {/* <div className="match-info">
          <h1>축하</h1>
        </div> */}
        <Typography className="match-info">
          <Title level={3}>{"<퇴근 후 커피>"}</Title>
          <Paragraph>
            {"모임의 호스트와 8정거장 거리입니다."}
            <br />
            <b>{"충남대학교(42600) 정류장"}</b>
            {"에서 하차하세요."}
          </Paragraph>
        </Typography>
      </FloatingPanel>
    </div>
  );
};

export default MatchPage;
