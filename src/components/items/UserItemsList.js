import React, { useEffect, useState } from "react";
import { getUserItems, deleteUserItem } from "../../managers/ItemManager";
import { Link, useNavigate } from "react-router-dom";
import { UserItemDetail } from "./UserItemDetails";
import { getCurrentUser } from "../../managers/UserManager";

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
        <>
            <article className="user_items">
                {userItems.map((userItem) => (
                    <section key={`userItem--${userItem.id}`} className="user_item">
                        <div className="user_item__name">
                            <Link to={`${userItem.item.url}`}>
                                {userItem.item.name}
                                <img src={userItem.item.picture} alt=" " />
                                {userItem.item.price}
                            </Link>
                            <button
                                className="btn btn-2 btn-sep icon-create"
                                onClick={() => {
                                    navigate({ pathname: `/useritems/${userItem.id}/update` });
                                }}
                            >
                                Update User Item
                            </button>
                            <button
                                className="btn btn-2 btn-sep icon-delete"
                                onClick={() => {
                                    handleDeleteUserItem(userItem.id);
                                }}
                            >
                                Delete User Item
                            </button>
                            <article className="user-item-details">
                                {/* Render any additional item details here */}
                            </article>
                        </div>
                    </section>
                ))}
            </article>

            <UserItemDetail />
        </>
    );
};
