import { Routes, Route,Navigate } from "react-router-dom";
import Teams from "./components/Teams";
import TeamsIndex from "./components/TeamsIndex";
import Team from "./components/Team";

export default function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/teams" replace />} />
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />      
          <Route path=":teamId" element={<Team />} />   
        </Route>
      </Route>
    </Routes>
  );
}
