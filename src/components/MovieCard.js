import React from 'react'
import PropTypes from 'prop-types';
import StarRating from './StarRating';


const MovieCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.movie.imageUrl} alt=""></img>
        </div>

        <div className="card-body">
            <h2 className="card-title">{props.movie.title}</h2>
            <h4 className="card-subtitle">{props.movie.subtitle}</h4>
            <h6 className="text-justify">{props.movie.description}</h6>
            {/* <h5>{props.movie.rating}</h5> */}
        </div>

        <div className="card-footer">
            <div className="clearfix">
                <div className="float-left mt-1">
                    <StarRating rating={props.movie.rating} />
                </div>
                <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
            </div>

        </div>
    </div>
)


MovieCard.defaultProps = {
    movie: {}
}

MovieCard.propTypes = {
    movie: PropTypes.object
}

export default MovieCard