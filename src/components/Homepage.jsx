import React from "react";
import { useGetShowsQuery } from "../services/showsApi";

const Homepage = () => {

    const { data: shows, isFetching} = useGetShowsQuery('all');
    console.log(shows);

    if(isFetching) console.log('loading...')

    return(
        <div className="home">
        </div>
    )
};

export default Homepage;