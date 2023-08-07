import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

function Popular() {
    const [movies, setMovies] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Tv");

    useEffect(() => {
        const API_KEY = 'c6a2a78594eff557eccab351f2eb6832';
        let url = "";

        if (selectedOption === "Tv") {
            url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`;
        } else if (selectedOption === "movie") {
            url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, [selectedOption]);

    const [slidesToShow, setSlidesToShow] = useState(7);

    useEffect(() => {
        function updateSlidesToShow() {
            const screenWidth = window.innerWidth;
            let newSlidesToShow = 7; // Cantidad de slides por defecto (pantallas grandes)

            if (screenWidth < 768) {
                newSlidesToShow = 2; // Reducir a 2 slides en pantallas pequeñas (menos de 768px)
            } else if (screenWidth < 1200) {
                newSlidesToShow = 3; // Reducir a 3 slides en pantallas medianas (menos de 1200px)
            }

            setSlidesToShow(newSlidesToShow);
        }

        updateSlidesToShow();

        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const toggleSelection = (selectedOption) => {
        setSelectedOption(selectedOption);
    };



    const settings = {
        dots: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
    };
    return (
        <div className="popular-container">
            <div className="popular">
                <h1 className="title-slider">Mejor Valoradas</h1>
                <div className="selector-wrapper">
                    <div
                        className={`option ${selectedOption === "Tv" ? "selected" : ""}`}
                        onClick={() => toggleSelection("Tv")}
                    >
                        Tv
                    </div>
                    <div
                        className={`option ${selectedOption === "movie" ? "selected" : ""}`}
                        onClick={() => toggleSelection("movie")}
                    >
                        Peliculas
                    </div>
                </div>

                <div className="main-popular">
                    <Slider {...settings}>
                        {movies.map((movie) => (
                            <>
                                <div key={movie.id}>
                                    <MovieCard
                                        title={movie.original_title || movie.name}
                                        posterPath={movie.poster_path}
                                        releaseDate={movie.release_date || movie.first_air_date}
                                        overview={movie.overview}
                                        rate={(movie.vote_average)}
                                    />
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Popular;
