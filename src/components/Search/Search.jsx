import { useContext, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { ContextReceita } from "../../contexts/ContextReceita/ContextReceita";
import "./style.css";

export default function Search() {
    const { setTextSearch } = useContext(ContextReceita);
    const [text, setText] = useState("");
    function handleText(e) {
        setText(e.target.value);
    }
    function handleTextSearch() {
        setTextSearch(text);
    }
    return (
        <div className="input-search">
            <input type="text" placeholder="Pesquisar receita" value={text} onChange={handleText} />

            <button onClick={handleTextSearch}><Link to={"/"} style={{ textDecoration: "none" }}><VscSearch color="#000" size={24} /></Link></button>

        </div>
    )
}