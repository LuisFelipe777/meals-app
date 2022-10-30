import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextReceita } from "../../contexts/ContextReceita/ContextReceita";
import Search from "../Search/Search";
import "./style.css";

export default function Header() {
    const { setTextSearch } = useContext(ContextReceita);
    return (
        <div className="header-contain">
            <div className="title-header">
                <Link to={"/"} style={{ textDecoration: "none", color: "#000" }} onClick={() => setTextSearch("")}>
                    <h1>MealsApp</h1>
                </Link>
            </div>
            <div className="search">
                <Search />
            </div>
        </div>
    );
}