import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import ShowCarousel from './ShowCarousel';

import { useGetShowsQuery } from "../services/showsApi";

const Homepage = () => {

    const { data: shows, isFetching } = useGetShowsQuery('all');
    if (isFetching) return 'Loading...'

    return (
        <>
        <ShowCarousel />
        <div className='shows-container' id="main">
            {shows.map(({ score, show }) =>
                <div style={{ width: '14rem' }} className="show-card" key={show.id}>
                    <Card.Img variant="top" src={show.image?.medium} />
                    <Card.Body>
                        <Card.Title className="show-card-title">{show.name}</Card.Title>
                        <ul className="list-group-flush">
                            <li><i>Genre:</i> {show.genres?.map(genre => {return `${genre} `})}</li>
                            <li><i>Language:</i> {show.language}</li>
                            <li><i>Rating:</i> {show.rating.average}</li>
                        </ul>
                        <Link to={`/showDetails/${show.externals.thetvdb}`}><Button variant="primary">Watch Now!</Button></Link>
                    </Card.Body>
                </div>
            )}
        </div>
        </>
    )
};

export default Homepage;