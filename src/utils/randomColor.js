const generateColor = () => {
  let color = '#';

  while (color.length < 7) {
    const a = Math.floor(Math.random() * 15);
    if (a < 10) {
      color += a;
    }
    switch (a) {
      case 10:
        color += 'A';
        break;
      case 11:
        color += 'B';
        break;
      case 12:
        color += 'C';
        break;
      case 13:
        color += 'D';
        break;
      case 14:
        color += 'E';
        break;
      case 15:
        color += 'F';
        break;
      default:
        break;
    }
  }

  return color;
};

const randomColor = () => ({
  color: generateColor(),
});

export default randomColor;
