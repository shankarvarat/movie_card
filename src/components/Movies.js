import React, { Component } from 'react';
import MovieService from '../services/MovieService';
import MovieList from './MovieList';



export default class Movies extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }


    render() {
        return (
            <div className="container-fluid" style={{ marginLeft: '-14px' }}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                    <MovieList movies={this.state.movies} />

                    </div>
                </div>
            </div>
        )
    }
}