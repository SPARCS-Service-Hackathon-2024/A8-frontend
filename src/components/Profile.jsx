import React, { useState } from "react";
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState({
    nickname: "",
    nearestStation: "",
    gender: "",
    matchGender: ""
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [stationRange, setStationRange] = useState(5);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); // 이미지 미리보기 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted", profile);
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="profile-image" className="profile-picture-label">
            프로필 사진
        </label>
        <div className="profile-picture">
        {imagePreview ? (
          <>
            <img src={imagePreview} alt="Profile" />
          </>
        ) : (
          <>
            <label htmlFor="profile-image" className="file-input-label">
              사진 선택
            </label>
            <input
              type="file"
              id="profile-image"
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the default input
            />
          </>
        )}
      </div>
        <div className="nickname">
          <label>
            닉네임
            <input
              type="text"
              name="nickname"
              value={profile.nickname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="nearest-station">
          <label>
            가까운 정거장
            <select
              name="nearestStation"
              value={profile.nearestStation}
              onChange={handleChange}
            >
              <option value="">정거장 선택</option>
              <option value="station1">1호선</option>
              <option value="station2">2호선</option>
            </select>
          </label>
        </div>
        <div className="gender">
          <label>
            내 성별
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            >
              <option value="">성별 선택</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
              <option value="other">기타</option>
            </select>
          </label>
        </div>
        <div className="match-gender">
          <label>
            매칭 희망 성별
            <select
              name="matchGender"
              value={profile.matchGender}
              onChange={handleChange}
            >
              <option value="">성별 선택</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
              <option value="any">상관없음</option>
            </select>
          </label>
        </div>
        <div className="station-range-section">
        <label htmlFor="station-range">
            매칭 희망 정거장 범위: {stationRange}
        </label>
        <input
            type="range"
            id="station-range"
            name="stationRange"
            min="1"
            max="10"
            value={stationRange}
            onChange={(e) => setStationRange(e.target.value)}
        />
        </div>

        <button type="submit" className="submit-button">저장</button>
      </form>
    </div>
  );
}

export default Profile;
