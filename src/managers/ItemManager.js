export const addItemToRegistry = (item) => {

    return fetch("http://localhost:8000/useritems", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json());
};

export const getUserItems = () => {
    return fetch("http://localhost:8000/useritems", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
        .then(response => response.json())
}

export const getUserItemById = (id) => {
    return fetch(`http://localhost:8000/useritems/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
        .then(response => response.json())
}

export const updateUserItem = (id, item) => {
    return fetch(`http://localhost:8000/useritems/${id}/update`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item),
    })
};

export const deleteUserItem = (id) => {
    return fetch(`http://localhost:8000/useritems/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
}

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

export const getItemById = (id, item) => {
    return fetch(`http://localhost:8000/items/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
}

export const changeItem = (id, item) => {
    return fetch(`http://localhost:8000/items/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item),
    })
};

export const deleteItem = (id) => {
    return fetch(`http://localhost:8000/items/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("furx_token")}`
        }
    })
}