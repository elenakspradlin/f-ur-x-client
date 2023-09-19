import React, { useEffect, useState } from "react";
import { getItems, deleteItem, getItemById } from "../../managers/ItemManager";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";

export const ItemsList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        updateItems();
    }, []);

    const updateItems = () => {
        getItems().then((data) => setItems(data));
    };

    const handleDeleteItem = (itemId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            deleteItem(itemId).then(() => {
                updateItems();
            });
        }
    };

    //  const handleAddItemToRegistry = (itemId) => {
    //     const shouldAddItem = window.confirm("Are you sure you want to add this item to your registry?");
    //    if (shouldAddItem) {
    //     addItem(itemId).then(() => {
    //       updateItems();
    //   });
    //  }
    //  };

    return (
        <>
            <article className="items">
                <button
                    className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/items/new" });
                    }}
                >
                    Register New Item
                </button>
                {items.map((item) => (
                    <section key={`item--${item.id}`} className="item">
                        <div className="item__name">
                            <Link to={`${item.url}`}>
                                {item.name}
                                <img src={item.picture} alt=" " />
                                {item.price}
                            </Link>
                            <button
                                className="btn btn-2 btn-sep icon-create"
                                onClick={() => {
                                    navigate({ pathname: `/items/${item.id}/update` });
                                }}
                            >
                                Update Item
                            </button>
                            <button
                                className="btn btn-2 btn-sep icon-delete"
                                onClick={() => {
                                    handleDeleteItem(item.id);
                                }}
                            >
                                Delete Item
                            </button>
                            {<button
                                className="btn btn-2 btn-sep icon-delete"
                                onClick={() => {
                                    handleAddItemToRegistry(item.id);
                                }}
                            >
                                Add Item To Registry
                            </button>}
                            <article className="item-details">
                                {/* Render any additional item details here */}
                            </article>
                        </div>
                    </section>
                ))}
            </article>

            <ItemDetail />
        </>
    );
};


