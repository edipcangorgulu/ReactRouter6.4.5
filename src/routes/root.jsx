import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function App() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <NavLink style={({ isActive }) => {
                    return { color: isActive ? "red" : "" };
                }} to="/"><h1>User İnformation</h1></NavLink>
                <NavLink style={({ isActive }) => {
                    return { color: isActive ? "red" : "" };
                }} to="/Home">Home</NavLink> |{" "}
                <NavLink style={({ isActive }) => {
                    return { color: isActive ? "red" : "" };
                }} to="/About">About</NavLink> |{" "}
                <NavLink style={({ isActive }) => {
                    return { color: isActive ? "red" : "" };
                }} to="/Users">Users</NavLink>
            </nav>
            <Outlet />
        </div>
    );
} 