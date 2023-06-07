import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {

    const showName = useParams();

    return(
        <div className="">
            {showName}
        </div>
    )
};

export default Show;