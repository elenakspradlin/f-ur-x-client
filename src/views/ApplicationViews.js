import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { ItemsList } from "../components/items/ItemList"
import { UserItemsList } from "../components/items/UserItemsList"
import { ItemForm } from "../components/items/ItemForm"
import { UpdateUserItem } from "../components/items/UpdateUserItem"
import { UpdateItem } from "../components/items/UpdateItem"
import { ItemDetail } from "../components/items/ItemDetail"
import { AboutPage } from "../components/about/About"
import { UserItemDetail } from "../components/items/UserItemDetails"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/items" element={<ItemsList />} />
            <Route path="/useritems" element={<UserItemsList />} />
            <Route path="/useritems/update/:id" element={<UpdateUserItem />} />
            <Route path="/useritems/:id" element={<UserItemDetail />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/items/new" element={<ItemForm />} />
            <Route path="/items/update/:id" element={<UpdateItem />} />
            <Route path="/about" element={<AboutPage />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
            </Route>
        </Routes>
    </>
}