import React, { useEffect, useState } from "react";
import { getItems, deleteItem, getItemById, addItemToRegistry } from "../../managers/ItemManager";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";
import { getCurrentUser } from "../../managers/UserManager";

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
                                    navigate({ pathname: `/items/update/${item.id}` });
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
                            <button
                                className="btn btn-2 btn-sep icon-add-registry"
                                onClick={evt => {
                                    // Prevent form from being submitted
                                    evt.preventDefault()

                                    const userItem = {
                                        item: item.id
                                    }

                                    // Send POST request to your API
                                    addItemToRegistry(userItem)
                                        .then(() => navigate("/useritems"))
                                }}
                            >
                                Add Item To Registry
                            </button>
                            <article className="item-details">
                                {/* Render any additional item details here */}
                            </article>
                        </div>
                    </section>
                ))}
            </article >

            <ItemDetail />
        </>
    );
};
