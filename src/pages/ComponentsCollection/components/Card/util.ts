function getRandomColor() {
  const lake = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    color += lake[index];
  }
  return color;
}

export { getRandomColor };
