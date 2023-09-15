import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createItem } from '../../managers/ItemManager.js'


export const ItemForm = () => {
    const navigate = useNavigate()
    const [currentItem, setCurrentItem] = useState({
        name: "",
        picture: "",
        price: "",
        url: ""
    })

    const changeItemState = (event) => {
        // TODO: Complete the onChange function
        const { name, value } = event.target;
        setCurrentItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Register New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name: </label>
                    <input
                        type="text"
                        name="name"
                        required autoFocus
                        className="form-control"
                        value={currentItem.name}
                        onChange={changeItemState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Picture </label>
                    <input
                        type="file"
                        name="picture"
                        required autoFocus
                        className="form-control"
                        value={currentItem.picture}
                        onChange={changeItemState}
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
                        value={currentItem.price}
                        onChange={changeItemState}
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
                        value={currentItem.url}
                        onChange={changeItemState}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const item = {
                        name: currentItem.name,
                        picture: currentItem.picture,
                        price: currentItem.price,
                        URL: currentItem.url,
                    }

                    // Send POST request to your API
                    createItem(item)
                        .then(() => navigate("/items"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}