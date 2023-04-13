import { Routes, Route } from "react-router-dom";

import { HomeCommon } from "../pages/common/HomeCommon";
import { MenuCommon } from "../pages/common/MenuCommon";
import { ProductCommon } from "../pages/common/ProductCommon";

export function CommonRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeCommon/>}/>
            <Route path="/menu" element={<MenuCommon/>}/>
            <Route path="/product/:id" element={<ProductCommon/>}/>            
        </Routes>
    )
}