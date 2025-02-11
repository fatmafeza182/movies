import Movie from "@/components/Movie";
import React from "react";

const Page = async ({ params }) => {
  const { keyword } = params; 

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
  );

  const data = await response.json();

  // API'den hata dönerse kontrol et
  if (!data.results || data.success === false) {
    return <div className="text-center text-red-500">Veri bulunamadı veya bir hata oluştu.</div>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-2 mt-3 ">
      {data.results.map((dt) => (
        <div key={dt.id} className="w-[200px] h-[300px] overflow-hidden">
          <Movie dt={dt} />
        </div>
      ))}
    </div>
  );
};

export default Page;
