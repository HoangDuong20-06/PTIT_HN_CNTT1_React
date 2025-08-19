import './App.css'

type ColorBoxProps = {
  color: string;
};

function Box({ color }: ColorBoxProps) {
  return (
    <div className="colorbox-container">
      <div className="colorbox" style={{ backgroundColor: color }}>
        Box
      </div>
      <p>{color}</p>
    </div>
  );
}
function ColorBox() {
  return (
    <div className="app">
      <Box color="red" />
      <Box color="blue" />
      <Box color="green" />
    </div>
  );
}

export default ColorBox;