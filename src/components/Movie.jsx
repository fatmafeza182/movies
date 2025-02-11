"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Movie = ({ dt }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${
    dt?.poster_path || dt?.backdrop_path
  }`;

  return (
    <Link href={`/movie/${dt?.id}`} className="cursor-pointer">
      <div className="relative w-[300px] h-[450px] transition-transform hover:scale-105">
        <Image
          src={imageUrl}
          alt={dt?.title || "Film posteri"}
          width={300}
          height={450}
          className="rounded-lg object-cover"
        />
        <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-2xl font-bold text-white">{dt?.title}</div>
          <div className="text-white">
            {dt?.release_date}-{dt?.vote_average}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
