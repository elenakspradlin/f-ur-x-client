import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { ItemsList } from "../components/items/ItemList"
import { ItemForm } from "../components/items/ItemForm"
import { UpdateItem } from "../components/items/UpdateItem"
import { ItemDetail } from "../components/items/ItemDetail"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/items" element={<ItemsList />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/items/new" element={<ItemForm />} />
            <Route path="/items/:id/update" element={<UpdateItem />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
            </Route>
        </Routes>
    </>
}