import React from 'react';
const API = ({ movies, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Popular Movies</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {movies.map((movie) => (
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
          ))}
        </div>
      )}
    </div>
  );
}

export default API;
