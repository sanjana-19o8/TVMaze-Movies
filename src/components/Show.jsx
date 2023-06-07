import React from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser';

import { useGetSingleShowQuery } from "../services/showsApi";

const Show = () => {
    
    const { showId} = useParams();
    const { data: showDets, isFetching } = useGetSingleShowQuery(showId);
    if(isFetching) return 'Loading...'

    return(
        <section className="show-details-container" 
        style={{backgroundImage: `url(${showDets.image.original})`}}>
            {console.log(showDets)}
            <div className="show-image">
                <img src={showDets.image?.medium} alt={`${showDets.name} poster`} />
            </div>
            <article className="show-desc">
                <div className="show-card-title">{showDets.name}</div>
                {HTMLReactParser(showDets.summary)}
                <ul className="list-group-flush">
                    <li><i>Genre:</i> {showDets.genres?.map(genre => {return `${genre} `})}</li>
                    <li><i>Language:</i> {showDets.language}</li>
                    <li><i>Rating:</i> {showDets.rating.average}</li>
                </ul>
                <div>
                Visit <a target="_blank" href={showDets.officialSite} rel="noreferrer">Official Site</a>
                </div>
                    <hr />
                <div className="show-links">
                    <h4>Links:</h4>
                    <button>
                    <a href={showDets._links?.previousepisode.href} target="_blank" rel="noreferrer">Watch Now!</a>
                    </button>
                </div>

            </article>
        </section>
    )
};

export default Show;