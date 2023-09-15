import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../../managers/ItemManager";

export const ItemDetail = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        getItemById(id).then(data => setItemDetail(data))

    }, [id]);


    return (
        <article className="item-details">
            <h2>{itemDetail.name}</h2>
            <div>Picture: {itemDetail.picture}</div>
            <div>Price: {itemDetail.price}</div>
            <div>URL: {itemDetail.url}</div>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: `/items/${itemDetail.id}/update` })
                }}
            >Update Item</button>
        </article>
    );
};