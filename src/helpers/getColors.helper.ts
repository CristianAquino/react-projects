const colors = ["#FB3437", "#5D0DFA", "#FF9501", "#2527EB", "#00F5F0"];

function randomColor() {
  let color = Math.floor(Math.random() * 4);
  return colors[color];
}

export { randomColor };
