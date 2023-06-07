import React, { useEffect, useState} from "react";
import { useGetShowsQuery } from "../services/showsApi";
import Carousel from 'react-bootstrap/Carousel';

const ShowCarousel = () => {

    const { data: shows, isFetching } = useGetShowsQuery('all');
    const [ topRatedShows, setTopRatedShows] = useState([]);
    
    if(isFetching) console.log('loading...');
    
    useEffect(() => {
        const fetchTopRatedShows = async () => {
          try {
            const topShows = shows.slice(0, 5);
            setTopRatedShows(topShows);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchTopRatedShows();
      }, [shows]);
    
    return (
        <>
        <Carousel className="carousel-shows">
            {topRatedShows.map( ({score, show}) =>
                <Carousel.Item interval={5000} key={score}>
                    <img
                        className="carousel-img"
                        src={show.image.original}
                        alt="First slide"
                        height='600px'
                    />
                    <Carousel.Caption>
                        <h3>{show.name}</h3>
                        <p>Watch NOW</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
        </>
    );
}

export default ShowCarousel;
