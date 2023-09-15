export const getItems = () => {
    return fetch("http://localhost:8000/items", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
        .then(response => response.json())
}

export const createItem = (item) => {
    return fetch("http://localhost:8000/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
}

export const getItemById = (id) => {
    return fetch(`http://localhost:8000/items/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
        .then(response => response.json())
}

export const updateItem = (id, item) => {
    return fetch(`http://localhost:8000/items/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item),
    })
};
