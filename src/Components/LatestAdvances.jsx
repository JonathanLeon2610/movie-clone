import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LatesAdvances() {
    const [selectedOption, setSelectedOption] = useState("streaming");
    const [movies, setMovies] = useState([]);
    const [selectedMovieImage, setSelectedMovieImage] = useState(null);
    const [hoveredMovieImage, setHoveredMovieImage] = useState(null);

    const toggleSelection = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        let url = "";
        const API_KEY = 'c6a2a78594eff557eccab351f2eb6832';

        if (selectedOption === "streaming") {
            url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
        } else if (selectedOption === "tv") {
            url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`;
        }
        else if (selectedOption === "rent") {
            url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`;
        }
        else if (selectedOption === "cinema") {
            url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
                if (response.results && response.results.length > 0) {
                    setSelectedMovieImage(`https://image.tmdb.org/t/p/w500${response.results[0].backdrop_path}`);
                }
            })
            .catch(err => console.error(err));
    }, [selectedOption]);

    const handleMovieHover = (image) => {
        setHoveredMovieImage(image);
    };

    const handleMovieLeave = () => {
        setHoveredMovieImage(null);
    };

    return (
        <section className="main-advances">
            <div>
                <div className="advances-header">
                    <h1 className="advances-title">Ultimos Avances</h1>
                    <div className="selector-wrapper2">
                        <div
                            className={`option2 ${selectedOption === "streaming" ? "selected2" : ""}`}
                            onClick={() => toggleSelection("streaming")}
                        >
                            En Streaming
                        </div>
                        <div
                            className={`option2 ${selectedOption === "tv" ? "selected2" : ""}`}
                            onClick={() => toggleSelection("tv")}
                        >
                            En Television
                        </div>
                        <div
                            className={`option2 ${selectedOption === "rent" ? "selected2" : ""}`}
                            onClick={() => toggleSelection("rent")}
                        >
                            En Alquiler
                        </div>
                        <div
                            className={`option2 ${selectedOption === "cinema" ? "selected2" : ""}`}
                            onClick={() => toggleSelection("cinema")}
                        >
                            En Cines
                        </div>
                    </div>
                </div>
                <div className="advances-container" style={{ backgroundImage: `url(${hoveredMovieImage || selectedMovieImage})` }}>
                    {movies.slice(0, 4).map((movie) => (
                        <div
                            key={movie.id}
                            className="trailer-card"
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,backgroundRepeat:" no-repeat" }}
                            onMouseEnter={() => handleMovieHover(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)}
                            onMouseLeave={handleMovieLeave}
                        >
                            <div className="trailer-card-title">
                                <h1>{movie.original_title || movie.name}</h1>
                                {console.log(movie)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatesAdvances;
