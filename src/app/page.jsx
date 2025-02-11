import Movie from "@/components/Movie";
import React from "react";

const page = async ({ searchParams }) => {
  const genre = searchParams?.genre || 'popular';
  
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    { next: { revalidate: 10000 } } 
  );

  const data = await response.json();
  console.log(data, "data");

  if (!data || !data.results) {
    return <p>Film verisi yüklenemedi.</p>;
  }

  return (
    <div className="flex items-center flex-wrap gap-3 p-5">
      {data.results.map((dt, i) => (
        <Movie key={i} dt={dt} />
      ))}
    </div>
  );
};

export default page;
