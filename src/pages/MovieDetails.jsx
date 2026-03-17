import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import { Heart, PlayCircle, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { kConverter } from "../lib/kconverter";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const foundShow = dummyShowsData.find((show) => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path}
          alt=""
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />
        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />
          <p className="text-red-500">ENGLISH</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {show.movie.title}
          </h1>
          <div className="flex  items-center gap-2 text-gray-300">
            <StarIcon className="w-4 h-4 fill-red-500 text-red-500" />
            {show.movie.vote_average.toFixed(1)} ({kConverter(show.movie.vote_count)} votes)
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {show.movie.overview}
          </p>
          <p className="text-gray-300 text-sm">
            {timeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              <PlayCircle className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
            >
              Buy Tickets
            </a>
            <button className="p-3 border border-gray-600 rounded-full hover:border-red-500 transition">
              <Heart className="w-6 h-6 fill-red-600 text-red-600" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-lg font-medium mt-20">Your Favourite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => {
            return (
              <div key={index} className="flex-shrink-0 text-center">
                <img
                  src={cast.profile_path}
                  alt={cast.name}
                  className="rounded-full h-20 w-20 aspect-square object-cover mx-auto"
                />
                <p className="text-sm mt-2 text-gray-300">{cast.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id} />
      <p className="text-lg font-medium mt-20 mb-8">You may also Like</p>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="bg-red-500 px-10 py-3 hover:bg-red-600 text-sm transition rounded-md font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  ) : (
    <Loading/>
  );
};

export default MovieDetails;
