import { useEffect } from "react";
import "./MapPage.css";

const MapPage = () => {
  window.kakao.maps.load(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(36.37317, 127.36062), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(container, options);

    // 마커가 표시될 위치
    const markerPosition = new window.kakao.maps.LatLng(36.37317, 127.36062);

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커 표시
    marker.setMap(map);

    // 오버레이에 표시될 내용 (프로필 사진)
    const content =
      '<div style="padding:5px;"><img src="https://picsum.photos/500/500?img=test" alt="프로필" style="width: 50px; height: 50px; border-radius: 50%;" /></div>';

    // 커스텀 오버레이 생성
    const customOverlay = new window.kakao.maps.CustomOverlay({
      map: map,
      position: markerPosition,
      content: content,
      yAnchor: 1,
    });
  });

  return (
    <div className="map-page">
      <div id="map"></div>
    </div>
  );
};

export default MapPage;
