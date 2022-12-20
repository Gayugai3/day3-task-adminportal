import "./App.css";
import "./sb-admin-2.min.css";
import Dasboard from "./Dasboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Userlist from "./Userlist";
import UserCreate from "./pages/UserCreate";
import UserView from "./UserView";
import UserEdit from "./UserEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dasboard />} />
          <Route path="user-list" element={<Userlist />} />
          <Route path="user-create" element={<UserCreate />} />
          <Route path="user-view/:id" element={<UserView />} />
          <Route path="user-edit/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
