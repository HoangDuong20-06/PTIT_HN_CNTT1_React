import "./App.css"
import { useState  } from "react"
interface SetName{
  name:string
}
function App() {
  const [name] = useState<SetName>({name:"Nguyễn Văn A"});

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Họ và tên: {name.name}</h2>
    </div>
  );
}

export default App;