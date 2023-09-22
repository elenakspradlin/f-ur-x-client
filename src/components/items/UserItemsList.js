import React, { useEffect, useState } from "react";
import { getUserItems, deleteUserItem } from "../../managers/ItemManager";
import { Link, useNavigate } from "react-router-dom";
import { UserItemDetail } from "./UserItemDetails";
import { getCurrentUser } from "../../managers/UserManager";
import "./UserItemsList.css"; // Import the CSS file here

export const UserItemsList = () => {
    const [userItems, setUserItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getCurrentUser();
        getUserItems(user.id).then((data) => setUserItems(data));
    }, []);

    const handleDeleteUserItem = (itemId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this item?");
        if (shouldDelete) {
            deleteUserItem(itemId).then(() => {
                // After deletion, update the user items list
                const user = getCurrentUser();
                getUserItems(user.id).then((data) => setUserItems(data));
            });
        }
    };

    return (
        <div className="user-items-container">
            <h1>Welcome to Your Registry!</h1>
            <h2>you deserve nice things</h2>

            <div className="user-items-grid">
                {userItems.map((userItem) => (
                    <article key={`userItem--${userItem.id}`} className="user-item">
                        <div className="user-item-content">
                            <Link to={`${userItem.item.url}`}>
                                <img
                                    className="resized-image"
                                    src={userItem.item.picture}
                                    alt={userItem.item.name}
                                    style={{ maxWidth: "30%", height: "auto" }}
                                />
                                <h3 className="item-name">{userItem.item.name}</h3>
                                <div className="item-price">{userItem.item.price}</div>
                            </Link>
                            <div className="item-buttons">
                                <button
                                    onClick={() => {
                                        navigate({ pathname: `/useritems/update/${userItem.id}` });
                                    }}
                                    className="btn btn-2 btn-sep icon-create"
                                >
                                    Update User Item
                                </button>
                                <button
                                    onClick={() => {
                                        handleDeleteUserItem(userItem.id);
                                    }}
                                    className="btn btn-2 btn-sep icon-delete"
                                >
                                    Delete User Item
                                </button>
                                <article className="user-item-details">
                                    {/* Render any additional item details here */}
                                </article>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <UserItemDetail />
        </div>
    );
};
