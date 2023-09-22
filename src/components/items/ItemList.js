import React, { useEffect, useState } from "react";
import { getItems, deleteItem, getItemById, addItemToRegistry } from "../../managers/ItemManager";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";
import { getCurrentUser } from "../../managers/UserManager";
import "./ItemList.css"

export const ItemsList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // You may fetch the user's ID from an authentication context or some other source
        const user = getCurrentUser(); // Example function to get user info
        setUserId(user.id); // Set the user ID
    }, []);

    useEffect(() => {
        updateItems();
    }, []);

    const updateItems = (itemId) => {
        getItems(itemId).then((data) => setItems(data));
    };

    const handleDeleteItem = (itemId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            deleteItem(itemId).then(() => {
                updateItems();
            });
        }
    };

    const handleAddItemToRegistry = (item) => {
        const shouldAddItem = window.confirm("Are you sure you want to add this item to your registry?");
        if (shouldAddItem) {
            // Call your addItem function with the item ID and user ID
            addItemToRegistry(item).then(() => {
                updateItems();
            });
        }
    };

    return (
        <>
            <h1>REGISTRY INSPIRATION BOARD!</h1>
            <h2>See what other users have added</h2>
            <img src="https://i.pinimg.com/564x/65/f9/52/65f95294285dfcd44d99864d9ed6982c.jpg"></img>
            <button
                className="btn btn-2 btn-sep icon-create btn-add-inspiration"
                onClick={() => {
                    navigate({ pathname: "/items/new" });
                }}
            >
                Add to the Community's Registry Inspiration!
            </button>

            <main className="items-container">
                <div className="items-grid">
                    {items.map((item) => (
                        <article key={`item--${item.id}`} className="item">
                            <div className="item-content">
                                <Link to={`${item.url}`}>
                                    <img
                                        className="resized-image"
                                        src={item.picture}
                                        alt={item.name}
                                        style={{ maxWidth: "30%", height: "auto" }}
                                    />
                                </Link>
                                <h3 className="item-name">{item.name}</h3>
                                <div className="item-price">{item.price}</div>

                                <div className="item-buttons">
                                    <button
                                        onClick={() => {
                                            navigate({ pathname: `/items/update/${item.id}` });
                                        }}
                                        className="btn btn-2 btn-sep icon-create"
                                    >
                                        Update Item
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleDeleteItem(item.id);
                                        }}
                                        className="btn btn-2 btn-sep icon-delete"
                                    >
                                        Delete Item
                                    </button>
                                    <button
                                        onClick={(evt) => {
                                            evt.preventDefault();

                                            const userItem = {
                                                item: item.id
                                            };

                                            addItemToRegistry(userItem).then(() => navigate("/useritems"));
                                        }}
                                        className="btn btn-2 btn-sep icon-add-registry"
                                    >
                                        Add Item To My Registry
                                    </button>
                                </div>
                            </div>
                        </article>

                    ))}
                    <ItemDetail />
                </div>
            </main>

        </>
    );

};
