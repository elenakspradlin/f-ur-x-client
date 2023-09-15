import React, { useEffect, useState } from "react"
import { getItems } from "../../managers/ItemManager.js"
import { Link, useNavigate } from "react-router-dom"
import { deleteItem } from "../../managers/ItemManager.js"

export const ItemsList = (props) => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        updateItems()
    }, [])

    const updateItems = () => {
        getItems().then(data => setItems(data))
    }

    const handleDeleteItem = (itemId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            deleteItem(itemId).then(() => {
                updateItems()
            });
        }
    };


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
                        <div className="item__name"><Link to={`/items/${item.id}`}>{item.name}<img src={item.picture} alt=" " />{item.price}{item.url}</Link></div>
                    </section>
                })
            }
            <button className="btn btn-2 btn-sep icon-delete"
                onClick={() => {
                    handleDeleteItem()
                }}>
                Delete Item </button>

        </article>
    )
}