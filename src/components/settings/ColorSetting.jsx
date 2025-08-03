// ColorSetting.jsx
import React from "react";

const ColorSetting = ({
  bgColor,
  navColor,
  footerColor,
  btnColor,
  onBgColorChange,
  onNavColorChange,
  onFooterColorChange,
  onBtnColorChange,
}) => {
  return (
    <div>
      <h2>Color - Setting</h2>
      <div>
        <label>배경 색상: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => onBgColorChange(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>네비 색상: </label>
        <input
          type="color"
          value={navColor}
          onChange={(e) => onNavColorChange(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>푸터 색상: </label>
        <input
          type="color"
          value={footerColor}
          onChange={(e) => onFooterColorChange(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>버튼 색상: </label>
        <input
          type="color"
          value={btnColor}
          onChange={(e) => onBtnColorChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorSetting;
