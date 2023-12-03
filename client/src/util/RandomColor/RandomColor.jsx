//랜덤하게 밝은 색상 나오는 함수
function RandomColor() {
  let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
  let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
  let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
  return `#${color_r + color_g + color_b}`;
};

export default RandomColor;