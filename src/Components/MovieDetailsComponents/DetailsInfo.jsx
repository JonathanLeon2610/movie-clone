import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";

function DetailsInfo() {
    const [cast, setCast] = useState([]);

    const [movie, setMovie] = useState([JSON.parse(localStorage.getItem('movie'))]);

    const urlNow = window.location.href;
    const partesUrl = urlNow.split('/');
    console.log(partesUrl[4]);


    useEffect(() => {
        const API_KEY = 'c6a2a78594eff557eccab351f2eb6832';
        let url = `https://api.themoviedb.org/3/movie/${partesUrl[4]}/credits?api_key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.cast); // Cambio aquí, accediendo a "data" directamente
                setCast(data.cast); // También cambia aquí
                console.log(movie);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const API_KEY = 'c6a2a78594eff557eccab351f2eb6832';
        let url = `https://api.themoviedb.org/3/movie/${partesUrl[4]}?api_key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Cambio aquí, accediendo a "data" directamente
                setMovie(data); // También cambia aquí
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };


    return (
        <section>
            <div className="details-info-container">
                <div className="details-info">
                    <div className="actor-slider">
                        <Slider {...sliderSettings}>
                            {cast.map((actor) => (
                                <div key={actor.id} className="actor-card">
                                    <img className="actor-img" src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`} alt="" />
                                    <h2>{actor.name}</h2>
                                    <p><i>({actor.character})</i></p>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="info-movie">
                        {movie ? (
                            <div>
                                <div className="media-icons">
                                    <FontAwesomeIcon className="media-icon-item" icon={faKiwiBird} />
                                    <FontAwesomeIcon className="media-icon-item" icon={faKiwiBird} />
                                    <FontAwesomeIcon className="media-icon-item" icon={faKiwiBird} />
                                    <FontAwesomeIcon className="media-icon-item" icon={faKiwiBird} />
                                </div>

                                <div className="movie-data">
                                    <h1>Status</h1>
                                    <h2>{movie.status}</h2>

                                    <h1>Original Language</h1>
                                    <h2>{movie.original_language}</h2>

                                    <h1>Budget</h1>
                                    <h2>${(movie.budget)}</h2>

                                    <h1>Revenue</h1>
                                    <h2>${(movie.revenue)}</h2>
                                </div>
                            </div>
                        ) : (
                            <p>Cargando</p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DetailsInfo;
