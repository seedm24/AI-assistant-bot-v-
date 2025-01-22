import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/agents">Agents</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;

