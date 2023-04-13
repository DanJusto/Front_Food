import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/admin/Home";
import { Menu } from "../pages/admin/Menu";
import { New } from "../pages/admin/New";
import { Edit } from "../pages/admin/Edit";
import { Product } from "../pages/admin/Product";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    )
}