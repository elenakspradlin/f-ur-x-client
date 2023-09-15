import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { updateItem, getItemById, changeItemState } from "../../managers/ItemManager";



export const UpdateItem = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState({})

    useEffect(() => {
        getItemById(id)
            .then((data) => {
                setCurrentItem(data);
            });
    }, [id]);

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
            <h2 className="itemForm__title">Update Item</h2>
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
                        type="text"
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
                        url: currentItem.url,
                    }

                    // Send POST request to your API
                    updateItem(item)
                        .then(() => navigate("/items"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}