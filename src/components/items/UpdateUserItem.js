import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changeUserItem, getUserItemById, changeUserItemState } from "../../managers/ItemManager";

export const UpdateUserItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentUserItem, setCurrentUserItem] = useState({});

    useEffect(() => {
        getUserItemById(id).then((data) => {
            setCurrentUserItem(data);
        });
    }, [id]);

    const changeUserItemState = (event) => {
        const { name, value } = event.target;
        setCurrentUserItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="currentUserItemForm">
            <h2 className="currentUserItemForm__title">Update User Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        required
                        autoFocus
                        className="form-control"
                        value={currentUserItem.name}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="picture">Picture </label>
                    <input
                        type="text"
                        name="picture"
                        required
                        autoFocus
                        className="form-control"
                        value={currentUserItem.picture}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        name="price"
                        required
                        autoFocus
                        className="form-control"
                        value={currentUserItem.price}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">URL: </label>
                    <input
                        type="text"
                        name="url"
                        required
                        autoFocus
                        className="form-control"
                        value={currentUserItem.url}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const userItem = {
                        id: currentUserItem.id,
                        name: currentUserItem.name,
                        picture: currentUserItem.picture,
                        price: currentUserItem.price,
                        url: currentUserItem.url,
                        profile: currentUserItem.profile,
                    };

                    changeUserItem(userItem.id, userItem).then(() => navigate("/useritems"));
                }}
                className="btn btn-primary"
            >
                Update User Item
            </button>
        </form>
    );
};
