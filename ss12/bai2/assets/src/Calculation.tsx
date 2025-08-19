import './App.css'

function App() {
  const plus = (a:number,b:number) => a+b;
  const minus = (a:number,b:number) => a-b;
  const core = (a:number,b:number) => a*b;
  const divide = (a:number,b:number) => (b!== 0 ? a/b : "Không thể chia cho 0");
  const a = 10;
  const b = 10;
  return (
    <>
      <div>
        <h3>Danh sách kết quả </h3>
        <ul>
          <li><p>{a} + {b} = {plus(a,b)}</p></li>
          <li><p>{a} - {b} = {minus(a,b)}</p></li>
          <li><p>{a} * {b} = {core(a,b)}</p></li>
          <li><p>{a} : {b} = {divide(a,b)}</p></li>
        </ul>
      </div>
    </>
  )
}
export default App
