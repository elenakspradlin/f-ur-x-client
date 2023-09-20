import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserItemById } from "../../managers/ItemManager";

export const UserItemDetail = () => {
    const { id } = useParams();
    const [userItemDetail, setUserItemDetail] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        getUserItemById(id).then(data => setUserItemDetail(data))

    }, [id]);

};