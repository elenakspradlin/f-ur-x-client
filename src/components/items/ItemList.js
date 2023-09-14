import React, { useEffect, useState } from "react"
import { getItems } from "../../managers/ItemManager.js"
import { Link, useNavigate } from "react-router-dom"


export const ItemsList = (props) => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getItems().then(data => setItems(data))
    }, [])

    return (
        <article className="items">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/items/new" })
                }}
            >Register New Item</button>
            {
                items.map(item => {
                    return <section key={`item--${item.id}`} className="item">
                        <div className="item__name"><Link to={`/items/${item.id}`}>{item.name}</Link></div>
                    </section>
                })
            }
        </article>
    )
}