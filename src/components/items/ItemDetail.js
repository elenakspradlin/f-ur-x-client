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

};