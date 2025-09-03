import "./App.css"
export default function App(){
  return(
    <>
    <div className="bg-[#d7f2fe] p-[20px] rounded-[8px]">
        <div className="bg-[#b7e8fd] relative p-[50px]">
        <p className="text-[#0970a8] relative bottom-[40px] right-[40px]">Relative parent</p>
        <button className="bg-[#0ea5e9] p-[10px] rounded-[8px] relative top-[50px] right-[50px]">Absolute child</button>
        </div>
    </div>
    </>
  )
}