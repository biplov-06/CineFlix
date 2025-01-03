import React from "react";
import Sad from "./assets/sad.jpg";

const MovieList = ({ movies }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h3 style={{ fontSize: '1.2rem', margin: '10px 0 5px' }}>{movie.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#555' }}>Rating: {movie.vote_average} / 10</p>
                        <p style={{ fontSize: '0.9rem', color: '#555' }}>popularity: {movie.popularity}</p>
                        <p style={{ fontSize: '0.9rem', color: '#555' }}>{movie.release_date}</p>
                    </div>
                ))
            ) : (<div>
                <p className="notfound">OOPS!</p>
                <p className="notfound"><img src={Sad} style={{height:"300px", width:"300px"}} alt="" /></p>
                <p className="notfound">Sorry, Movie not Found</p>
            </div>
            )}
        </div>
    );
};

export default MovieList;
