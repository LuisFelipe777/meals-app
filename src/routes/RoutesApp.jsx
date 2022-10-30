import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home/Home";
import MealPage from "../pages/MealPage";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/meals/:id" element={<MealPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter >
    );
}