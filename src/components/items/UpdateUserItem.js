import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserItem, getUserItemById, changeItemState } from "../../managers/ItemManager";



export const UpdateUserItem = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [currentUserItem, setCurrentUserItem] = useState({})

    useEffect(() => {
        getUserItemById(id)
            .then((data) => {
                setCurrentUserItem(data);
            });
    }, [id]);

    const changeUserItemState = (event) => {
        // TODO: Complete the onChange function
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
                    <label htmlFor="title">Name: </label>
                    <input
                        type="text"
                        name="name"
                        required autoFocus
                        className="form-control"
                        value={currentUserItem.item?.name}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Picture </label>
                    <input
                        type="text"
                        name="picture"
                        required autoFocus
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
                        required autoFocus
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
                        required autoFocus
                        className="form-control"
                        value={currentUserItem.url}
                        onChange={changeUserItemState}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const userItem = {
                        id: currentUserItem.id, // Corrected variable name
                        name: currentUserItem.name, // Assuming you want to update all fields
                        picture: currentUserItem.picture,
                        price: currentUserItem.price,
                        url: currentUserItem.url,
                        profile: currentUserItem.profile
                    }

                    // Send PUT request to your API (assuming updateUserItem is for updating)
                    updateUserItem(userItem.id, userItem)
                        .then(() => navigate("/useritems"))
                }}
                className="btn btn-primary">Update User Item</button>

        </form>
    )
}