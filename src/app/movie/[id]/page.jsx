import Link from "next/link";
import React from "react";

const MovieDetail = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
  );
  const movie = await response.json();

  return (
    <div>
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        {movie.title}
      </h1>
      <div className="mx-auto p-3 flex justify-center gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg mt-5 mx-auto"
        />
        <div className="">
          <p className="text-gray-400 mt-3">{movie.overview}</p>
          <p className="mt-2 text-orange-500 text-xl font-bold">
            IMDB Puanı: {movie.vote_average}
          </p>
          <Link
            href="/"
            className="mt-5 inline-block bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            ← Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
