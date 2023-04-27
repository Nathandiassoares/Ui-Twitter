import { Outlet } from "react-router-dom";
import { Sidebar } from "../componetes/Sidebar";

import './Defaoult.css'

export function Defaoult() {
  return (
    <div className="layout">
    <Sidebar />
    <div className="content">
       <Outlet />
    </div>
  </div>
  )
}