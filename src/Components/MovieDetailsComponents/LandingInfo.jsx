import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHeart, faBookmark, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function LandingInfo() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const API_KEY = 'c6a2a78594eff557eccab351f2eb6832';
        let url = `https://api.themoviedb.org/3/movie/614479?api_key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Cambio aquí, accediendo a "data" directamente
                setMovie(data); // También cambia aquí
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    function formatTime(number) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;

        return `${hours}h(s) ${minutes}min`;
    }


    return (
        <>
            <div className="landing-info-container" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="landing-info">
                    <img className="landing-info-img" src="https://www.themoviedb.org/t/p/original/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg" alt="" />
                    <div className="landing-info-text">
                        <h1 className="landing-info-text-title">{movie.title}</h1>
                        <div style={{display:"flex"}}>
                            <div>
                                {movie.genres && movie.genres.map((genre) => (
                                    <span key={genre.id}> {genre.name} - </span>
                                ))}
                                <p style={{paddingBottom:"12px"}}>Duracion: {formatTime(movie.runtime)}</p>
                            </div>
                            
                        </div>
                        <div className="landing-rate-info">
                            <div className='circle-rate' style={{ border: `solid 2px ${movie.vote_average < 6 ? 'red' : movie.vote_average >= 6 && movie.vote_average < 8 ? 'orange' : 'green'}` }}>
                                <div className='circle-text'>
                                    <h1 className='rate-text' style={{ fontSize: "20px" }}>{(movie.vote_average)}</h1>
                                </div>
                            </div>
                            <div className='circle-rate' >
                                <div className='circle-text'>
                                    <h1 className='rate-text'><FontAwesomeIcon icon={faList} /></h1>
                                </div>
                            </div>
                            <div className='circle-rate'>
                                <div className='circle-text'>
                                    <h1 className='rate-text'><FontAwesomeIcon icon={faHeart} /></h1>
                                </div>
                            </div>
                            <div className='circle-rate'>
                                <div className='circle-text'>
                                    <h1 className='rate-text'><FontAwesomeIcon icon={faBookmark} /></h1>
                                </div>
                            </div>
                            <div className='circle-rate'>
                                <div className='circle-text'>
                                    <h1 className='rate-text'><FontAwesomeIcon icon={faStar} /></h1>
                                </div>
                            </div>
                            <div className='circle-rate'>
                                <div className='circle-text'>
                                    <h1 className='rate-text'><FontAwesomeIcon icon={faPlay} /></h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="landing-info-text-description" style={{ color: "gray" }}><i>{movie.tagline}</i> </p>
                        </div>
                        <h2 style={{ position: "relative", bottom: "20px" }}>Overview</h2>
                        <p className="landing-info-text-description" style={{ bottom: "24px", maxWidth: "80%" }}>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingInfo;