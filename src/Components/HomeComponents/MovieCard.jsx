import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ title, posterPath, releaseDate, rate, id }) => {
    const baseURL = 'https://image.tmdb.org/t/p/w500'; // URL base para las imágenes de las películas\

    
    return (
        <Link to={`MovieDetails/${id}`} style={{textDecoration:"none", color:"black"}}>
        <div className="movie-card">
            <div className="movie-image">
                <img
                    className="movie-poster"
                    src={baseURL + posterPath}
                    alt={`Poster de ${title}`}
                />
            </div>
            <div className='circle-rate' style={{ border: `solid 2px ${rate < 6 ? 'red' : rate >= 6 && rate<8 ? 'orange' : 'green'}` }}>
                <div className='circle-text'>
                    <h1 className='rate-text'>{(rate).toFixed(1)}%</h1>
                </div>
            </div>
            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                <h2 className="movie-release-date">{releaseDate}</h2>
            </div>
            
        </div>
        </Link>
    );
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default MovieCard;
